/**
 * Telegram API client.
 *
 * @package tg-service
 * @author Ivan Ovcharenko ybutb88@gmail.com
 */

const config = require('./../../config/config.json');
const rp = require('request-promise');
const logger = require( '../logger' );
const Response = require('components/tgApiResponse');

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

	/**
	 * Sends request to tg api.
	 *
	 * @param endpoint
	 * @param method
	 * @returns {Promise}
	 */
	const send = (endpoint, method) => {

		return new Promise((resolve, reject) => {
			let uri = 'https://api.telegram.org/bot' + config.bot.key + endpoint.getRequest().url;

			let options = {
				method: method,
				uri: uri,
				port: 443,
				headers: {
					'Content-Type': 'application/json',
				},
				body: endpoint.getRequest().body,
				json:true,
				transform: (body, response) => {
					response.data = body;
					return response;
				}
			};

			let telegramResponse = new Response(500, {});

			rp(options)
				.then((response) => {
					let statusCode = response.statusCode;

					if (statusCode === 'undefined') {
						statusCode = 200;
					}
					telegramResponse.setStatusCode(statusCode);
					telegramResponse.body = response.body.result;

					resolve(telegramResponse);
				})
				.catch((err) => {
					telegramResponse.setUnsuccessful();
					logger.log('Unsuccessful response from Telegram API: ' + err);

					if (err.statusCode !== 'undefined' && err.statusCode !== 0) {
						telegramResponse.setStatusCode(err.statusCode);
					}

					reject(telegramResponse);
				});
		});

	};

	return {
		get: get,
		post: post,
		put: put,
		del: del
	}
};