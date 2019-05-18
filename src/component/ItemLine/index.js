

import React from 'react';
import './index.less';

export default (props) => {

    return (
        <span className="input-item-line">
            <label>{props.label}:</label>
            <span>
                {props.children}
            </span>
        </span>
    );

}