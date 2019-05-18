import React from 'react';
import {render, connect} from '../../../frame';

import Button from 'antd/lib/button';
import "antd/dist/antd.css";
import './index.less';

import ClickAction from '../../action/Click';
import CreateProjectPage from '../CreateProjectPage';
import MainAction from '../../action/Main';

import Layout from 'antd/lib/layout';

const {Header, Content} = Layout;

const HomePage = render({
    actions: {
        click: ClickAction,
        main: MainAction
    }
})(({props, action, state}) => {

    const {cp} = props;

    return (
        <div className="platform-page">
            <Layout>
                <Header>
                    <Button
                        onClick={action.click.createProject}
                    >
                        新建项目
                    </Button>
                </Header>
                <Content>
                    {
                        cp.currentPage === 'create-project' && 
                        <CreateProjectPage />
                    }
                    <div className="project-card-list">
                        {cp.projects.map((item, index) => {
                            return (
                                <div 
                                    className="project-card"
                                    key={index}
                                >
                                    {item.projectName}
                                </div>
                            );
                        })}
                    </div>
                </Content>
            </Layout>
        </div>
    );

});


export default connect(HomePage);   