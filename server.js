'use strict';
const config = require('./src/config/config.json');
const settings = require('./settings.json');
const logger = require( './src/logger' );
const process = require('process');
const router = require('./src/components/router');
const express = require('express');
const app = express();

process.title = 'tg-service';

app.use(router);
app.listen(8081);

process.once('SIGTERM', process.exit);