import React from 'react';
import {render, connect} from '../../../frame';

import Button from 'antd/lib/button';
import "antd/dist/antd.css";
import './index.less';

import ClickAction from '../../action/Click';
import MainAction from '../../action/Main';
import ProjectEditAction from '../../action/ProjectCard';

import ProjectEditPage from '../ProjectEditPage';
import CreateProjectPage from '../CreateProjectPage';
import Layout from 'antd/lib/layout';

const {Header, Content} = Layout;

const HomePage = render({
    actions: {
        click: ClickAction,
        main: MainAction,
        proE: ProjectEditAction
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
                        [
                            <CreateProjectPage 
                                key={0}
                            />,
                            <div 
                                className="project-card-list"
                                key={1}
                            >
                                {cp.projects.map((item, index) => {
                                    return (
                                        <div 
                                            className="project-card"
                                            key={index}
                                            onClick={action.proE.openProjectPage(item)}
                                        >
                                            {item.projectName}
                                        </div>
                                    );
                                })}
                            </div>
                        ]
                    }
                    {
                        cp.currentPage === 'project-edit-page' &&
                        [
                            <ProjectEditPage 
                                key={0}
                            />
                        ]
                    }
                </Content>
            </Layout>
        </div>
    );

});


export default connect(HomePage);   