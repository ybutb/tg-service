'use strict';
const config = require('./config/config.json');
const settings = require('./settings.json');
const logger = require( './dist/logger' );
const process = require('process');
const router = require('./dist/components/router');
const express = require('express');
const app = express();

process.title = 'tg-service';

app.use(router);
app.listen(8081);

process.once('SIGTERM', process.exit);