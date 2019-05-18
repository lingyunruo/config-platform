

const projectHtml = require('../../template/project.html.ejs');
const path = require('path');
const ejs = require('ejs');
const hammer = require('../hammer');

module.exports = (options) => {

    let projectPath = options.projectPath;
    let projectName = options.projectName;

    let htmlContent = ejs.render(projectHtml, {
        projectName: projectName,
        cssPath: `${projectName}/dist/main.css`,
        jsPath: `${projectName}/dist/main.js`,
    });

    hammer.writeFile(projectPath, `${projectName}/index.html`, htmlContent);
}   
