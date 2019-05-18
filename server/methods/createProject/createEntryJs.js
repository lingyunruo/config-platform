
const ejs = require('ejs');
const entryJsTmp = require('../../template/project.entryJs.ejs');
const hammer = require('../hammer');

module.exports = (option) => {

    let projectName = option.projectName;
    let projectPath = option.projectPath;

    let entryJsContent = ejs.render(entryJsTmp);

    hammer.writeFile(projectPath, `${projectName}/main.js`, entryJsContent);
}