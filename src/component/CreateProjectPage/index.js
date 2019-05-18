import React from 'react';
import './index.less';
import {render, connect} from '../../../frame';

import Input from 'antd/lib/input';
import Select from 'antd/lib/select';
import Button from 'antd/lib/button';

import CreateProjectAction from '../../action/CreateProject';

const {Option} = Select;

const Wrapper = render({
    actions: {
        createP: CreateProjectAction
    }
})(({props, action, state}) => {

    const {cp} = props;

    return (
        <div className="create-project-page">
            <span className="input-item-line">
                <label>输入项目名称:</label>
                <span>
                    <Input 
                        value={cp.createProjectFormValue.projectName}
                        onChange={action.createP.changeCreateProjectFormValue('projectName')}
                    />
                </span>
            </span>
            <span className="input-item-line">
                <label>选择项目组件库:</label>
                <span>
                    <Select
                        style={{
                            width: 120
                        }}
                        value={cp.createProjectFormValue.library}
                        onChange={action.createP.changeCreateProjectFormValue('library')}
                    >
                        {cp.libraryList.map((item, index) => {
                            return (
                                <Option 
                                    value={item}
                                    key={item}
                                >
                                    {item}
                                </Option>
                            )
                        })}
                    </Select>
                </span>
            </span>
            <span className="input-item-line">
                <label>需要路由:</label>
                <span>
                    <Select
                        style={{
                            width: 120
                        }}
                        value={cp.createProjectFormValue.needRouter}
                        onChange={action.createP.changeCreateProjectFormValue('needRouter')}
                    >
                        <Option value="yes">是</Option>
                        <Option value="no">否</Option>
                    </Select>
                </span>
            </span>
            <div className="create-project-footer">
                <Button
                    type="primary"
                    onClick={action.createP.doCreateProject}
                >
                    创建
                </Button>
            </div>
        </div>
    );

});

export default connect(Wrapper);