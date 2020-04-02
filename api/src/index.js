const express = require('express');
const jwt = require('express-jwt');
const minimist = require('minimist');

const auth = require('./auth');
const database = require('./database');

const {
    dbuser,
    dbpass,
    port = 3333,
    secret = process.env['JWT_SECRET'] || 'reactstack'
} = minimist(process.argv.slice(2));

process.env['JWT_SECRET'] = secret;

database.connect(dbuser, dbpass);

const app = express();
const routes = require('./routes');

app.use(express.json());
app.use(auth.jwt(secret));
app.use(auth.error);
app.use(routes);

console.log(`Listening port ${port}...`);

app.listen(port);
