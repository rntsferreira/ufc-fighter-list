const express = require('express');
const mongoose = require('mongoose');
const devConfig = require('./config.dev');
const app = express();

mongoose.connect(devConfig.mongoUrl, { useMongoClient: true });
mongoose.Promise = global.Promise;

// const migration = (data, model) => {
//   if (model === 'fighters') {
//     const schema = require('./schemas/fighters.squema')(mongoose.Schema);
//     const Fighters = mongoose.model('fighters', schema);
//     data.forEach((item) => new Fighters(item).save());
//   }
// };
// migration(require('./fighters'), 'fighters');

app.listen(devConfig.port, () => console.log(devConfig.portRunningMessage, devConfig.port));