
const path = require('path');
const config = require('../../config');

module.exports = (body) => {
    let {
        configPath
    } = body;

    let projectConfig = require(path.join(__dirname, '../../../project', configPath));
    let {projectName, library} = projectConfig;
    let components = config.library[library].components;

    return {
        componentsList: components
    }
}