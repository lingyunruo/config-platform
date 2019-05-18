module.exports = `
import React from 'react';
import {render, connect} from '../../../frame';

const HomePage = render({
    actions: {
    }
})(({props, action, state}) => {

    return (
        <div className="platform-page">
            
        </div>
    );

});


export default connect(HomePage);   
`;