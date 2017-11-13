const express = require('express');
const devConfig = require('./config.dev');

const app = express();

app.listen(devConfig.port, () => console.log(devConfig.portRunningMessage, devConfig.port));