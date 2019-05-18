

const ejs = require('ejs');
const hammer = require('../hammer');
const containerTmp = require('../../template/project.container.ejs');

module.exports = (options) => {

    let {
        projectName,
        projectPath,
        library
    } = options;

    let componentContent = ejs.render(containerTmp);

    hammer.writeFile(projectPath, `${projectName}/container/index.js`, componentContent);
}