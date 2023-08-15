import React, { useState, useEffect } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Modal, Form, Input, Select, Button, message } from 'antd';
import { CopyOutlined } from '@ant-design/icons';

import Draggable from 'react-draggable';
import api from '@src/api';
import ChildrenTable from './ChildrenTable';
const { Option } = Select;

interface CollectionCreateFormProps {
  visible: boolean;
  onCancel: () => void;
}

// 查看组件信息
const InformationDisplay: React.FC<CollectionCreateFormProps> = ({ visible, onCancel }) => {
  const [form] = Form.useForm();

  const draggleRef = React.createRef<HTMLDivElement>();

  const component_typeSelect = ['filter', 'middleware', 'sort', 'recall'];

  function handleChangeTtypeSelect(value: any) {
    console.log(`selected ${value}`);
  }

  const columns = [
    {
      title: '组件',
      dataIndex: 'component',
      ellipsis: true,
    },
    {
      title: '组件mark',
      dataIndex: 'component_mark',
      width: 200,
      ellipsis: true,
      /* eslint-disable */
      render: (text: any, record: any) => {
        return (
          <div style={{ whiteSpace: 'normal' }}>
            <a href={record.url} target="_blank">
              {record.component_mark}
            </a>

            <CopyToClipboard text={record.component_mark} onCopy={() => message.success('复制成功~')}>
              <CopyOutlined style={{ paddingLeft: 2 }} />
            </CopyToClipboard>
          </div>
        );
      },
    },
    {
      title: '配置',
      dataIndex: 'config',
      ellipsis: true,
      /* eslint-disable */
      render: (text: any, record: any) => {
        return (
          <div style={{ whiteSpace: 'normal' }}>
            {record.config}
            <CopyToClipboard text={record.config} onCopy={() => message.success('复制成功~')}>
              <CopyOutlined style={{ paddingLeft: 2 }} />
            </CopyToClipboard>
          </div>
        );
      },
    },
    {
      title: '负责人',
      dataIndex: 'admin',
      ellipsis: true,
    },
    {
      title: '环境',
      dataIndex: 'env',
      ellipsis: true,
    },
    {
      title: '说明',
      dataIndex: 'des',
      // ellipsis: true,
    },
    {
      title: '使用中的strategyID',
      dataIndex: 'using_strategy',
      ellipsis: true,
    },
  ];

  const [columnsValue] = useState(columns),
    [dataValue, setDataValue] = useState([]),
    [disabled, setdisabled] = useState(true),
    [bounds, setbounds] = useState({ left: 0, top: 0, bottom: 0, right: 0 });

  // componentDidMount
  useEffect(() => {
    // api.get_components_info({ component: 'filter' }).then(item => {
    //   console.log(item, 'values1111');
    //   setDataValue(item.result.data || []);
    // });
    get_components_info({ component: 'filter' });
  }, []);
  function get_components_info(values: any) {
    api.get_components_info(values).then(item => {
      if (item.retcode === 0) {
        setDataValue(item.result.data || []);
        message.success('查看组件信息成功');
      } else if (item.retmsg) {
        message.error(`失败原因: ${item.retmsg}`);
      }
    });
  }
  const onFinish = (values: any) => {
    const valueListSum = {
      ...values,
      marks: [],
      strategy_ids: [],
    };
    if (values) {
      if (values && values.marks && values.marks.includes(';')) {
        valueListSum.marks = values.marks.split(';').splice('');
      } else {
        if (values.marks) {
          valueListSum.marks.push(values.marks);
        }
      }
      if (values && values.strategy_ids && values.strategy_ids.includes(';')) {
        valueListSum.strategy_ids = values.strategy_ids.split(';').map(Number);
      } else {
        if (values.strategy_ids) {
          valueListSum.strategy_ids.push(parseInt(values.strategy_ids));
        }
      }
      get_components_info(valueListSum);
    }
  };

  const onStart = (event: any, uiData: any) => {
    const { clientWidth, clientHeight } = window.document.documentElement;

    const targetRect = draggleRef.current?.getBoundingClientRect();
    if (!targetRect) {
      return;
    }
    setbounds({
      left: -targetRect.left + uiData.x,
      right: clientWidth - (targetRect.right - uiData.x),
      top: -targetRect.top + uiData.y,
      bottom: clientHeight - (targetRect.bottom - uiData.y),
    });
  };

  return (
    <Modal
      width={1000}
      title={
        <div
          style={{
            width: '100%',
            cursor: 'move',
          }}
          onMouseOver={() => {
            if (disabled) {
              setdisabled(false);
            }
          }}
          onMouseOut={() => {
            setdisabled(true);
          }}
          onFocus={() => {}}
          onBlur={() => {}}
        >
          查看组件信息
        </div>
      }
      footer={null}
      visible={visible}
      onCancel={onCancel}
      modalRender={modal => (
        <Draggable disabled={disabled} bounds={bounds} onStart={(event, uiData) => onStart(event, uiData)}>
          <div ref={draggleRef}>{modal}</div>
        </Draggable>
      )}
    >
      <Form
        style={{ marginBottom: '20px' }}
        form={form}
        layout="inline"
        name="form_in_modal"
        onFinish={onFinish}
        initialValues={{ component: 'filter' }}
      >
        <Form.Item name="component" label="组件种类">
          <Select style={{ width: 200 }} onChange={handleChangeTtypeSelect}>
            {component_typeSelect.map(OptionItem => {
              return (
                <Option value={OptionItem} key={OptionItem}>
                  {OptionItem}
                </Option>
              );
            })}
          </Select>
        </Form.Item>
        <Form.Item
          name="marks"
          label="组件mark"
          // rules={[{ required: true, message: 'Please input the opr of collection!' }]}
        >
          <Input style={{ width: 200 }} />
        </Form.Item>
        <Form.Item
          name="strategy_ids"
          label="策略ID"
          // rules={[{ required: true, message: 'Please input the opr of collection!' }]}
        >
          <Input style={{ width: 200 }} />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            查询
          </Button>
        </Form.Item>
      </Form>
      <ChildrenTable columns={columnsValue} data={dataValue} scroll={{ x: 1000 }} />
    </Modal>
  );
};
export default InformationDisplay;
