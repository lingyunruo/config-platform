
const hammer = require('./hammer');
const ejs = require('ejs');
const path = require('path');



module.exports = (option) => {
    const projectConfigTemplate = require('../template/project.config.ejs');
    const projects = require('../config/projects');

    let projectName = option.projectName;
    let projectPath = option.projectPath;

    let configContent = ejs.render(projectConfigTemplate, {
        projectName: projectName
    });

    projects.push({
        projectName: projectName
    })

    hammer.writeFile(projectPath, 'config.js', configContent);
    hammer.writeFile(path.join(__dirname, '../config'), 'projects.js', `
    module.exports = ${JSON.stringify(projects, null, '\t')}
    `);
}