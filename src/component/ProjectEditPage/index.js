import React from 'react';

import './index.less';

import {render, connect} from '../../../frame';

import ProjectCardAction from '../../action/ProjectCard';

import Select from 'antd/lib/select';
import Button from 'antd/lib/button';

import ItemLine from '../ItemLine';

const Option = Select.Option;

const Wrapper = render({
    actions: {
        proE: ProjectCardAction
    }
})(({props, action, state}) => {
    const {cp} = props;

    return (
        <div className="project-card-page">
            <div className="project-card-header">
                <ItemLine
                    label="选择组件:"
                >
                    <Select
                        style={{
                            width: 120
                        }}
                    >
                        {cp.componentsList.map((item) => {
                            return (
                                <Option 
                                    value={item}
                                    key={item}
                                >
                                    {item}
                                </Option>
                            );
                        })}      
                    </Select>
                </ItemLine>
            </div>
            <div className="project-card-page-content">
                
            </div>
        </div>
    );

});

export default connect(Wrapper);

