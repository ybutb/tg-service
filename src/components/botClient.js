const config = require('../config/config.json');
const https = require("https");
const request = require("request");
const logger = require( '../logger' );
const querystring = require('querystring');

module.exports = () => {

	const get = (endpoint) => {
		return send(endpoint, 'GET');
	};

	const post = (endpoint) => {
		return send(endpoint, 'POST');
	};

	const put = (endpoint) => {
		return send(endpoint, 'PUT');
	};

	const del = (endpoint) => {
		return send(endpoint, 'DELETE');
	};

	const send = (endpoint, method) => {

		request({
			uri: 'https://api.telegram.org/bot' + config.bot.key + endpoint.getRequest().url,
			port: 443,
			headers: {
				'Content-Type': 'application/json',
			},
			method: method,
			body: endpoint.getRequest().body,
			json:true
		}, (error, response) => {
			if (error) {
				logger.log(error);
			}

			return response;
		});

	};

	return {
		get: get,
		post: post,
		put: put,
		del: del
	}
};