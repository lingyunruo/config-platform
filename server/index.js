
const express = require('express');

const bodyParser = require('body-parser');

const app = express();

const readLib = require('./methods/readLib');
const createProject = require('./methods/createProject');

const config = require('./config');

app.use(bodyParser.json());
app.use('/page', express.static('page'));
app.use('/static', express.static('static'));


app.post('/api/getInitData', (req, res) => {

    const projects = require('./config/projects');
    let libList = readLib();

    res.send({
        projects: projects,
        libraryList: libList
    });

});

app.post('/api/createProject', (req, res) => {

    createProject({
        projectName: req.body.projectName,
        projectPath: config.projectPath
    });
    const projects = require('./config/projects');

    res.send({
        projects: projects
    });
});


app.listen(9000);