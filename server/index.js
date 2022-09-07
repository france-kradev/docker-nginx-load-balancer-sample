const express = require('express');
const config = require('./config');

const app = express();

app.get('/', (req, res) => {
    res.send(`From service: ${config.serviceName}\n`);
});

app.listen(config.port, config.host);
console.log(`Running service http://${config.host}:${config.port}`);
