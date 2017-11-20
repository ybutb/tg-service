/**
 * Endpoint class for posting with bot using Telegram API.
 *
 * @package tg-service
 * @author Ivan Ovcharenko ybutb88@gmail.com
 */

const client = require('components/botClient')();
const filters = require('components/filters');
const express = require('express');
const Endpoint = require('./endpoint.js');
const TgApiRequest = require('../components/tgApiRequest');
const config = require('./../../config/config.json');

class postMemeEndpoint extends Endpoint {

	/**
	 * @param TgApiRequest
	 */
	apiRequest;

	/**
	 *
	 */
	constructor() {
		super();
		this.apiRequest = TgApiRequest;
		this.apiRequest.url = '/sendMessage';
		this.apiRequest.body.chat_id = config.bot.channel;
	}

	/**
	 * Returns router function for endpoint.
	 *
	 * @returns {*} Router function.
	 */
	getRoute() {
		return express.Router().post('/', (req, res) => {
			this.apiRequest.body.text = req.body.meme_link;

			client.post(this)
				.then((response) => {
						if (response.statusCode === 0) {
							response.statusCode = 200;
						}
						res.status(response.statusCode).send(response.getBody());
					}
				)
				.catch((response) => {
					if (response.statusCode === 0) {
						response.statusCode = 500;
					}

					res.status(response.statusCode).send({"error": "Internal server error."});
				});
		});
	}

	/**
	 * Returns Api request instance.
	 *
	 * @returns TgApiRequest
	 */
	getRequest() {
		return this.apiRequest;
	}
}

module.exports = new postMemeEndpoint().getRoute();