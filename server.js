'use strict';
const config = require('./config/config.json');
const settings = require('./settings.json');
const logger = require( './dist/logger' );
const process = require('process');
const router = require('./dist/components/router');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 5858;

process.title = 'tg-service';

process.on('unhandledRejection', (reason, p) => {
	console.log('Unhandled Rejection at: Promise', p, 'reason:', reason);
	logger.log(reason);
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(router);

app.listen(PORT);

process.once('SIGTERM', process.exit);