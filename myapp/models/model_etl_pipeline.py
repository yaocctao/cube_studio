from flask_appbuilder import Model
from sqlalchemy.orm import relationship
from sqlalchemy import Text

from myapp.models.helpers import AuditMixinNullable

from myapp import app
from myapp.models.helpers import ImportMixin
from myapp.models.model_team import Project
from sqlalchemy import Column, Integer, String, ForeignKey
from flask_appbuilder.models.decorators import renders
from flask import Markup
from myapp.models.base import MyappModelBase
metadata = Model.metadata
conf = app.config



class ETL_Pipeline(Model,ImportMixin,AuditMixinNullable,MyappModelBase):
    __tablename__ = 'etl_pipeline'
    id = Column(Integer, primary_key=True)
    name = Column(String(100),nullable=False,unique=True)
    describe = Column(String(200),nullable=False)
    project_id = Column(Integer, ForeignKey('project.id'),nullable=False)  # 定义外键
    project = relationship(
        "Project", foreign_keys=[project_id]
    )
    workflow = Column(String(200),nullable=True)   # 调度引擎
    dag_json = Column(Text(65536),nullable=True,default='{}')  # pipeline的上下游关系
    config = Column(Text(65536),default='{}')   # pipeline的全局配置
    expand = Column(Text(65536),default='[]')

    # export_children = "etl_task"

    def __repr__(self):
        return self.name

    @property
    def etl_pipeline_url(self):
        pipeline_url="/etl_pipeline_modelview/api/web/" +str(self.id)
        return Markup(f'<a target=_blank href="{pipeline_url}">{self.describe}</a>')


    def clone(self):
        return ETL_Pipeline(
            name=self.name.replace('_', '-'),
            describe=self.describe,
            project_id=self.project_id,
            dag_json=self.dag_json,
            config=self.config,
            expand=self.expand,
        )


class ETL_Task(Model,ImportMixin,AuditMixinNullable,MyappModelBase):
    __tablename__ = 'etl_task'
    id = Column(Integer, primary_key=True)
    name = Column(String(100),nullable=False,unique=True)
    describe = Column(String(200),nullable=False)
    # etl_pipeline_id = Column(Integer, ForeignKey('etl_pipeline.id'),nullable=False)  # 定义外键
    # etl_pipeline = relationship(
    #     "ETL_Pipeline", foreign_keys=[etl_pipeline_id]
    # )
    etl_pipeline_id = Column(Integer)
    template = Column(String(100),nullable=False)
    task_args = Column(Text(65536),default='{}')
    etl_task_id = Column(String(100),nullable=False)
    expand = Column(Text(65536),default='[]')


    # export_parent = "etl_pipeline"


    def __repr__(self):
        return self.name




