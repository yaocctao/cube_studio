"use strict";(self.webpackChunkvite_ml_platform=self.webpackChunkvite_ml_platform||[]).push([[842],{60238:function(e,t,n){var a=n(67487),r="http://11.187.53.46:8080/api";t.Z={query_abtests:function(e){return a.Z.post({url:"".concat(r,"/query_abtests"),data:e})},query_edge_factorys:function(e){return a.Z.post({url:"".concat(r,"/query_edge_factorys"),data:e})},delete_edge_factory:function(e){return a.Z.post({url:"".concat(r,"/delete_edge_factory"),data:e})},query_structs:function(e){return a.Z.post({url:"".concat(r,"/query_structs"),data:e})},delete_struct:function(e){return a.Z.post({url:"".concat(r,"/delete_struct"),data:e})},query_associated_nodes:function(e){return a.Z.post({url:"".concat(r,"/query_associated_nodes"),data:e})},mod_struct:function(e){return a.Z.post({url:"".concat(r,"/mod_struct"),data:e})},add_struct:function(e){return a.Z.post({url:"".concat(r,"/add_struct"),data:e})},query_scenes:function(e){return a.Z.post({url:"".concat(r,"/query_scenes"),data:e})},query_associated_graphs:function(e){return a.Z.post({url:"".concat(r,"/query_associated_graphs"),data:e})},add_scene:function(e){return a.Z.post({url:"".concat(r,"/add_scene"),data:e})},mod_scene:function(e){return a.Z.post({url:"".concat(r,"/mod_scene"),data:e})},query_graph_templates:function(e){return a.Z.post({url:"".concat(r,"/query_graph_templates"),data:e})},query_components:function(e){return a.Z.post({url:"".concat(r,"/query_components"),data:e})},delete_component:function(e){return a.Z.post({url:"".concat(r,"/delete_component"),data:e})},query_component_historys:function(e){return a.Z.post({url:"".concat(r,"/query_component_historys"),data:e})},get_scene_names:function(e){return a.Z.post({url:"".concat(r,"/get_scene_names"),data:e})},get_scene_available_graphs:function(e){return a.Z.post({url:"".concat(r,"/get_scene_available_graphs"),data:e})},mod_abtest:function(e){return a.Z.post({url:"".concat(r,"/mod_abtest"),data:e})},add_abtest:function(e){return a.Z.post({url:"".concat(r,"/add_abtest"),data:e})},query_graphs:function(e){return a.Z.post({url:"".concat(r,"/query_graphs"),data:e})},get_graph_template_names:function(e){return a.Z.post({url:"".concat(r,"/get_graph_template_names"),data:e})},batch_query_components:function(e){return a.Z.post({url:"".concat(r,"/batch_query_components"),data:e})},query_graph_historys:function(e){return a.Z.post({url:"".concat(r,"/query_graph_historys"),data:e})},query_template_available_node_factorys:function(e){return a.Z.post({url:"".concat(r,"/query_template_available_node_factorys"),data:e})},get_edge_factory_names:function(e){return a.Z.post({url:"".concat(r,"/get_edge_factory_names"),data:e})},get_node_factory_names:function(e){return a.Z.post({url:"".concat(r,"/get_node_factory_names"),data:e})},query_node_factorys:function(e){return a.Z.post({url:"".concat(r,"/query_node_factorys"),data:e})},mod_graph:function(e){return a.Z.post({url:"".concat(r,"/mod_graph"),data:e})},add_graph:function(e){return a.Z.post({url:"".concat(r,"/add_graph"),data:e})},get_config_prototype:function(e){return a.Z.post({url:"".concat(r,"/get_config_prototype"),data:e})},rollback_graph:function(e){return a.Z.post({url:"".concat(r,"/rollback_graph"),data:e})}}},17097:function(e,t,n){n.d(t,{Q:function(){return a},a:function(){return r}});var a={0:"\u6709\u6548","-1":"\u5931\u6548",1:"\u521b\u5efa\u6210\u529f",2:"\u6d4b\u8bd5\u53d1\u5e03",3:"\u6b63\u5f0f\u53d1\u5e03",4:"\u516c\u6709",5:"\u79c1\u6709"},r={0:"green","-1":"#F56C6C",1:"#67C23A",2:"green",3:"#E6A23C",4:"#409EFF",5:"#909399"}},44541:function(e,t,n){n.d(t,{Z:function(){return _}});var a=n(50678),r=n(72791),s=n(20135),o=n(58646),i=n(58105),l=n(13295),c=n(73231),u=n(87309),d=n(71939),p=n.n(d),m=n(80184),f=s.Z.TextArea;function _(e){var t=o.Z.useForm(),n=(0,a.Z)(t,1)[0],d=(0,r.useState)({}),_=(0,a.Z)(d,2),h=_[0],y=_[1],Z=(0,r.useRef)(null);(0,r.useEffect)((function(){n.resetFields(),n.setFieldsValue(e.form),e.form.map_config&&y(JSON.parse(JSON.stringify(e.form.map_config))),e.saveFrom&&e.saveFrom.graph_name&&n.setFieldsValue(e.saveFrom)}),[]);return(0,m.jsx)("div",{children:(0,m.jsxs)(o.Z,{name:"basic",labelCol:{span:8},style:{width:"80%"},wrapperCol:{span:16},initialValues:{remember:!0},onFinish:function(t){e.submitForm(t,e.opName)},onFinishFailed:function(){console.log("\u5931\u8d25")},autoComplete:"off",ref:Z,form:n,children:[e.formRolue.map((function(t){switch(t.type){case"input":return(0,m.jsx)(o.Z.Item,{label:t.label,name:t.name,initialValue:e.form[t.name],rules:[{required:!0,message:"\u8bf7\u8f93\u5165"+t.label}],children:(0,m.jsx)(s.Z,{disabled:!(!e.disableds&&!1!==e.isadd)})},t.name);case"select":return(0,m.jsx)(o.Z.Item,{label:t.label,name:t.name,rules:[{required:!0,message:"\u8bf7\u9009\u62e9"+t.label}],children:(0,m.jsx)(i.Z,{disabled:!(!e.disableds&&!1!==e.isadd),children:t.options?t.options.map((function(e){return(0,m.jsx)(i.Z.Option,{value:e.value,children:e.label},e.value)})):null})},t.name);case"picker":return(0,m.jsx)(o.Z.Item,{label:t.label,name:t.name,rules:[{required:!0,message:"\u8bf7\u9009\u62e9"+t.label}],children:(0,m.jsx)(l.Z,{style:{width:"100%"}})},t.name);case"radio":return(0,m.jsx)(o.Z.Item,{label:t.label,name:t.name,rules:[{required:!0,message:"\u8bf7\u9009\u62e9"+t.label}],children:(0,m.jsx)(c.ZP.Group,{disabled:!(!e.disableds&&!1!==e.isadd),children:t.options?t.options.map((function(e){return(0,m.jsx)(c.ZP,{value:e.value,children:e.label},e.value)})):null})},t.name);case"json":return(0,m.jsx)(o.Z.Item,{label:t.label,name:t.name,children:(0,m.jsx)(p(),{src:h,displayDataTypes:!1,theme:"railscasts",onEdit:function(e){return function(e){return console.log(e),!0}(e)},onAdd:function(e){return function(e){return console.log(e),!0}(e)}})},t.name);case"textArea":return(0,m.jsx)(o.Z.Item,{label:t.label,name:t.name,rules:[{required:!0,message:"\u8bf7\u8f93\u5165"+t.label}],children:(0,m.jsx)(f,{rows:4,disabled:!(!e.disableds&&!1!==e.isadd)})},t.name)}})),(0,m.jsxs)(o.Z.Item,{wrapperCol:{offset:8,span:16},children:[(0,m.jsxs)("div",{style:{display:"flex",justifyContent:"center"},children:[0===e.stepCurrent?(0,m.jsx)(u.Z,{onClick:function(){e.setEditStatus(!1),e.setBaseForm&&e.setBaseForm({})},children:"\u8fd4\u56de"}):null,0===e.stepCurrent?(0,m.jsx)(u.Z,{htmlType:"submit",style:{marginLeft:"20px"},children:"\u4e0b\u4e00\u6b65"}):null]}),e.stepCurrent&&0!==e.stepCurrent?(0,m.jsx)(u.Z,{type:"primary",children:"\u63d0\u4ea4"}):null,e.isadd&&void 0===e.stepCurrent?(0,m.jsx)(u.Z,{htmlType:"submit",type:"primary",disabled:!(!e.disableds&&!1!==e.isadd),children:"\u63d0\u4ea4"}):null]})]})})}},99154:function(e,t,n){n.d(t,{Z:function(){return f}});var a=n(72791),r=n(13295),s=n(58646),o=n(66106),i=n(30914),l=n(20135),c=n(58105),u=n(73231),d=n(87309),p=n(80184),m=r.Z.RangePicker;function f(e){var t=(0,a.useRef)(null);(0,a.useEffect)((function(){console.log("\u89e6\u53d1\u4e86",t.current.setFieldsValue(e.form))}),[]);return(0,p.jsx)("div",{children:(0,p.jsx)(s.Z,{name:"basic",labelCol:{span:8},wrapperCol:{span:16},initialValues:{remember:!0},onFinish:function(t){e.queryList(t)},onFinishFailed:function(){console.log("\u5931\u8d25")},autoComplete:"off",ref:t,children:(0,p.jsxs)(o.Z,{children:[e.formRolue.map((function(e){switch(e.type){case"input":return(0,p.jsx)(i.Z,{span:6,children:(0,p.jsx)(s.Z.Item,{label:e.label,name:e.name,children:(0,p.jsx)(l.Z,{})},e.name)});case"select":return(0,p.jsx)(i.Z,{span:6,children:(0,p.jsx)(s.Z.Item,{label:e.label,name:e.name,children:(0,p.jsx)(c.Z,{children:e.options?e.options.map((function(e){return(0,p.jsx)(c.Z.Option,{value:e.value,children:e.label},e.value)})):null})},e.name)});case"picker":return(0,p.jsx)(i.Z,{span:6,children:(0,p.jsx)(s.Z.Item,{label:e.label,name:e.name,children:(0,p.jsx)(r.Z,{style:{width:"100%"}})},e.name)});case"radio":return(0,p.jsx)(i.Z,{span:6,children:(0,p.jsx)(s.Z.Item,{label:e.label,name:e.name,children:(0,p.jsxs)(u.ZP.Group,{children:[(0,p.jsx)(u.ZP,{value:1,children:"A"}),e.options?e.options.map((function(e){return(0,p.jsx)(u.ZP,{value:e.value,children:e.label},e.value)})):null]})},e.name)});case"rangePicker":return(0,p.jsx)(i.Z,{span:6,children:(0,p.jsx)(s.Z.Item,{label:e.label,name:e.name,children:(0,p.jsx)(m,{})},e.name)})}})),(0,p.jsx)(i.Z,{span:6,children:(0,p.jsx)(s.Z.Item,{wrapperCol:{offset:8,span:16},children:(0,p.jsx)(d.Z,{type:"primary",htmlType:"submit",children:"\u67e5\u8be2"})})})]})})})}},56842:function(e,t,n){n.r(t),n.d(t,{default:function(){return g}});var a=n(18489),r=n(50678),s=n(72791),o=n(23695),i=n(47528),l=n(83099),c=n(64564),u=n(87309),d=n(618),p=n(48757),m=n(99154),f=n(44541),_=n(60238),h={scene_name:"",address:"",admin:"",time:""},y=[{type:"input",name:"scene_name",label:"\u573a\u666f\u540d\u79f0"},{type:"input",name:"admin",label:"\u8d1f\u8d23\u4eba"},{type:"input",name:"address",label:"\u8c03\u7528\u5730\u5740"},{type:"rangePicker",name:"time",label:"\u66f4\u65b0\u65f6\u95f4"}],Z=n(17097),x=n(80184);function g(){var e=(0,s.useState)(!1),t=(0,r.Z)(e,2),n=t[0],g=t[1],b=(0,s.useState)([]),j=(0,r.Z)(b,2),v=j[0],q=j[1],k=(0,s.useState)([]),C=(0,r.Z)(k,2),I=C[0],w=C[1],F=(0,s.useState)({}),P=(0,r.Z)(F,2),S=P[0],E=P[1],T=(0,s.useState)(!1),z=(0,r.Z)(T,2),O=z[0],N=z[1],A=(0,s.useState)(!1),R=(0,r.Z)(A,2),G=R[0],V=R[1],B=[{title:"#",render:function(e,t,n){return(0,x.jsx)("a",{children:n+1+""})}},{title:"\u7c7b\u578b",dataIndex:"type",key:"type"},{title:"\u7248\u672c",dataIndex:"version",key:"version"},{title:"\u5de5\u5382\u540d",dataIndex:"factory_name",key:"factory_name"},{title:"\u540d\u79f0",dataIndex:"name",key:'"name'},{title:"\u72b6\u6001",dataIndex:"status",key:"status",render:function(e){return(0,x.jsx)(i.Z,{color:Z.a[e]?Z.a[e]:"",children:Z.Q[e]?Z.Q[e]:""})}},{title:"\u8d1f\u8d23\u4eba",dataIndex:"admin",key:"admin"},{title:"\u63cf\u8ff0",dataIndex:"des",key:"des"},{title:"\u66f4\u65b0\u65f6\u95f4",dataIndex:"updated_time",key:"updated_time"}],D=[{title:"#",dataIndex:"bussiness_id",key:"bussiness_id",render:function(e,t,n){return(0,x.jsx)("a",{children:n+1+""})}},{title:"\u573a\u666f\u540d",fType:"input",dataIndex:"scene_name",key:"scene_name"},{title:"\u8c03\u7528\u5730\u5740",fType:"input",dataIndex:"address",key:"address"},{title:"\u8d1f\u8d23\u4eba",fType:"input",dataIndex:"admin",key:'"admin'},{title:"\u63cf\u8ff0",fType:"textArea",dataIndex:"des",key:"des"},{title:"\u66f4\u65b0\u65f6\u95f4",dataIndex:"updated_time",key:"updated_time"},{title:"\u64cd\u4f5c",key:"action",render:function(e,t){return(0,x.jsxs)(l.Z,{size:"middle",children:[(0,x.jsx)("a",{onClick:function(){N(!1),E((0,a.Z)({},t)),g(!0)},children:"\u67e5\u770b"},"view"),(0,x.jsx)("span",{style:{color:"#999",marginTop:"-1px"},children:" | "}),(0,x.jsx)("a",{onClick:function(){console.log(t),N(!0),E((0,a.Z)({},t)),g(!0)},children:"\u7f16\u8f91"},"edit"),(0,x.jsx)("span",{style:{color:"#999",marginTop:"-1px"},children:" | "}),t.associated_graphs&&t.associated_graphs.length?(0,x.jsxs)("a",{onClick:function(){!function(e){var t={opr:"query_associated_graphs",data:{associated_graphs:e.associated_graphs}};_.Z.query_associated_graphs(t).then((function(e){console.log(e),0===e.status?(w(e.data.results),V(!0),o.ZP.success(e.message)):o.ZP.error(e.message)}))}(t)},children:[" \u5173\u8054\u56fe (",t.associated_graphs&&t.associated_graphs.length?t.associated_graphs.length:0," )"]},"node"):(0,x.jsx)("span",{style:{color:"#999"},children:"\u5173\u8054\u56fe"})]})}}],L=D.filter((function(e){return e.fType})).map((function(e){return{type:e.fType,name:e.dataIndex,label:e.title}})),Q=function(e){var t=e.admin,n=e.scene_name,a=e.address,r=e.time,s={scene_name:n||"",address:a||"",admin:t||"",min_updated_time:r&&r[0]?new Date(r[0]).getTime():0,max_updated_time:r&&r[1]?new Date(r[1]).getTime():0};_.Z.query_scenes({opr:"query_scenes",data:s}).then((function(e){0===e.status?(q(e.data.results),o.ZP.success(e.message)):o.ZP.error(e.message)}))};(0,s.useEffect)((function(){Q({})}),[]);return(0,x.jsxs)("div",{style:{padding:"30px 40px"},children:[(0,x.jsxs)("div",{children:[(0,x.jsx)(c.Z,{title:"\u67e5\u8be2\u6761\u4ef6",children:(0,x.jsx)(m.Z,{formRolue:y,form:h,queryList:Q})}),(0,x.jsx)(c.Z,{title:"\u67e5\u8be2\u7ed3\u679c",extra:(0,x.jsx)(u.Z,{type:"primary",onClick:function(){return N(!0),E({name:""}),void g(!0)},children:"\u65b0\u589e"}),style:{marginTop:"20px"},children:(0,x.jsx)(d.Z,{columns:D,dataSource:v},"scene_name")})]}),(0,x.jsx)(p.Z,{width:900,title:O?O&&S.version?"\u7f16\u8f91":"\u65b0\u589e":"\u67e5\u770b",visible:n,onCancel:function(){g(!1)},footer:[(0,x.jsx)(u.Z,{onClick:function(){g(!1)},children:"\u5173\u95ed"},"back")],children:(0,x.jsx)(f.Z,{formRolue:L,form:S,isadd:O,showEdit:n,submitForm:function(e){var t=(0,a.Z)({},e);void 0!==S.version?(t.version=S.version+1,_.Z.mod_scene({opr:"mod_scene",data:t}).then((function(e){0===e.status?(Q({}),g(!1),o.ZP.success(e.message)):o.ZP.error(e.message)}))):_.Z.add_scene({opr:"add_scene",data:t}).then((function(e){0===e.status?(Q({}),g(!1),o.ZP.success(e.message)):o.ZP.error(e.message)}))},resFied:function(){g(!1),Q({})}})}),(0,x.jsx)(p.Z,{width:"60%",title:"\u5173\u8054\u56fe",visible:G,onCancel:function(){V(!1)},footer:[(0,x.jsx)(u.Z,{onClick:function(){V(!1)},children:"\u5173\u95ed"},"back")],children:(0,x.jsx)(d.Z,{columns:B,dataSource:I},"struct_name")})]})}},83099:function(e,t,n){n.d(t,{u:function(){return f},Z:function(){return h}});var a=n(87462),r=n(4942),s=n(29439),o=n(72791),i=n(81694),l=n.n(i),c=n(85501),u=n(24886);function d(e){var t=e.className,n=e.direction,s=e.index,i=e.marginDirection,l=e.children,c=e.split,u=e.wrap,d=o.useContext(f),p=d.horizontalSize,m=d.verticalSize,_=d.latestIndex,h={};return d.supportFlexGap||("vertical"===n?s<_&&(h={marginBottom:p/(c?2:1)}):h=(0,a.Z)((0,a.Z)({},s<_&&(0,r.Z)({},i,p/(c?2:1))),u&&{paddingBottom:m})),null===l||void 0===l?null:o.createElement(o.Fragment,null,o.createElement("div",{className:t,style:h},l),s<_&&c&&o.createElement("span",{className:"".concat(t,"-split"),style:h},c))}var p=n(19911),m=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]])}return n},f=o.createContext({latestIndex:0,horizontalSize:0,verticalSize:0,supportFlexGap:!1}),_={small:8,middle:16,large:24};var h=function(e){var t,n=o.useContext(u.E_),i=n.getPrefixCls,h=n.space,y=n.direction,Z=e.size,x=void 0===Z?(null===h||void 0===h?void 0:h.size)||"small":Z,g=e.align,b=e.className,j=e.children,v=e.direction,q=void 0===v?"horizontal":v,k=e.prefixCls,C=e.split,I=e.style,w=e.wrap,F=void 0!==w&&w,P=m(e,["size","align","className","children","direction","prefixCls","split","style","wrap"]),S=(0,p.Z)(),E=o.useMemo((function(){return(Array.isArray(x)?x:[x,x]).map((function(e){return function(e){return"string"===typeof e?_[e]:e||0}(e)}))}),[x]),T=(0,s.Z)(E,2),z=T[0],O=T[1],N=(0,c.Z)(j,{keepEmpty:!0}),A=void 0===g&&"horizontal"===q?"center":g,R=i("space",k),G=l()(R,"".concat(R,"-").concat(q),(t={},(0,r.Z)(t,"".concat(R,"-rtl"),"rtl"===y),(0,r.Z)(t,"".concat(R,"-align-").concat(A),A),t),b),V="".concat(R,"-item"),B="rtl"===y?"marginLeft":"marginRight",D=0,L=N.map((function(e,t){return null!==e&&void 0!==e&&(D=t),o.createElement(d,{className:V,key:"".concat(V,"-").concat(t),direction:q,index:t,marginDirection:B,split:C,wrap:F},e)})),Q=o.useMemo((function(){return{horizontalSize:z,verticalSize:O,latestIndex:D,supportFlexGap:S}}),[z,O,D,S]);if(0===N.length)return null;var J={};return F&&(J.flexWrap="wrap",S||(J.marginBottom=-O)),S&&(J.columnGap=z,J.rowGap=O),o.createElement("div",(0,a.Z)({className:G,style:(0,a.Z)((0,a.Z)({},J),I)},P),o.createElement(f.Provider,{value:Q},L))}}}]);