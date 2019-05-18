
const express = require('express');

const bodyParser = require('body-parser');

const app = express();

const readLib = require('./methods/readLib');
const createProject = require('./methods/createProject/createProject');
const initProjectCard = require('./methods/showPage/initProjectCard');

const config = require('./config');

app.use(bodyParser.json());
app.use('/page', express.static('page'));
app.use('/static', express.static('static'));
app.use('/project', express.static('project'));


app.post('/api/getInitData', (req, res) => {

    const projects = require('./config/projects');
    let libList = readLib(config);

    res.send({
        projects: projects,
        libraryList: libList
    });

});

app.post('/api/createProject', (req, res) => {

    createProject({
        projectName: req.body.projectName,
        projectPath: config.projectPath,
        library: req.body.library
    });
    const projects = require('./config/projects');

    res.send({
        projects: projects
    });
});

app.post('/api/initProjectCard', (req, res) => {

    let data = initProjectCard(req.body);

    res.send(data);
});

app.listen(9000);