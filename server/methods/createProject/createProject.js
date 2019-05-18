const writeConfig = require('./writeConfig');
const writeHtml = require('./createHtml');
const writeEntryJs = require('./createEntryJs');
const writeContainer = require('./createContainer');

module.exports = (option) => {


    writeConfig(option);

    writeEntryJs(option);

    writeHtml(option);

    writeContainer(option);

}