const express = require('express');
const minimist = require('minimist');
const database = require('./database');

const { dbuser, dbpass, port = 3333 } = minimist(process.argv.slice(2));

database.connect(dbuser, dbpass);

const app = express();
const routes = require('./routes');

app.use(express.json());
app.use(routes);

console.log(`Listening port ${port}...`);

app.listen(port);
