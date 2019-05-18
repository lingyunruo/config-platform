const writeConfig = require('./writeConfig');

module.exports = (option) => {

    writeConfig({
        projectName: option.projectName,
        projectPath: option.projectPath
    });

}