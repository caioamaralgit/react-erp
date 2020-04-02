const express = require('express');
const minimist = require('minimist');
const cors = require('cors');

const auth = require('./auth');
const database = require('./database');

console.log("Libraries loaded")

const {
    dbuser,
    dbpass,
    port = 3333,
    secret = process.env['JWT_SECRET'] || 'reactstack'
} = minimist(process.argv.slice(2));

process.env['JWT_SECRET'] = secret;

console.log("Initializing database connection");

database.connect(dbuser, dbpass);

console.log("Starting server");

const app = express();
const routes = require('./routes');

app.use(express.json());
app.use(cors());
app.use(auth.jwt(secret));
app.use(auth.error);
app.use(routes);

console.log(`Listening port ${port}...\n`);

app.listen(port);
