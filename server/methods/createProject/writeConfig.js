
const hammer = require('../hammer');
const ejs = require('ejs');
const path = require('path');



module.exports = (option) => {
    const projectConfigTemplate = require('../../template/project.config.ejs');
    const projects = require('../../config/projects');

    let {projectName, projectPath, library} = option;

    // 生成项目内的配置文件
    let configContent = ejs.render(projectConfigTemplate, {
        projectName: projectName,
        pagePath: path.join(projectName, 'index.html'),
        library: library
    });
    
    // 生成项目列表配置
    projects.push({
        projectName: projectName,
        configPath: path.join(projectName, 'config.js')
    });

    let projectConfig = JSON.stringify(projects, null, '\t');

    hammer.writeFile(projectPath, `${projectName}/config.js`, configContent);
    hammer.writeFile(path.join(__dirname, '../../config'), 'projects.js', `module.exports = ${projectConfig}`);
}