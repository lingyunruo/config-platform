
const path = require('path');

const antdConfig = require('./antd.config');


module.exports = {
    library: {
        antd: antdConfig
    },
    projectPath: path.join(__dirname, '../../project')
}