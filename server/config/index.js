
const path = require('path');

const antdConfig = require('./antd.config');
const yyConfig = require('./yy.config');


module.exports = {
    library: {
        antd: antdConfig,
        yy: yyConfig
    },
    projectPath: path.join(__dirname, '../../project')
}