



module.exports = `
import React from 'react';

import './index.less';

import {render, connect} from '../../../frame';

import ProjectCardAction from '../../action/ProjectCard';


const Wrapper = render({
    actions: {
        proE: ProjectCardAction
    }
})(({props, action, state}) => {

    return (
        <div>
            卡片详细页面
        </div>
    );

});

export default connect(Wrapper);

`