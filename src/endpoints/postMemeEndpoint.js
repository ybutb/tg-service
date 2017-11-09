const client = require('components/botClient')();
const filters = require('components/filters');
const express = require('express');
const Endpoint = require('./endpoint.js');
const TgApiRequest = require('../components/tgApiRequest');
const config = require('./../../config/config.json');

class postMemeEndpoint extends Endpoint {
	apiRequest;

	constructor() {
		super();
		this.apiRequest = TgApiRequest;
		this.apiRequest.body.chat_id = config.bot.channel;
	}

	getRoute() {
		return express.Router()
			.post('/', (req, res) => {
					this.apiRequest.body.text = req.post('meme_link');
					let response = client.post(this);
					res.status(response.statusCode).send(response.body);
				}
			);
	}

	getRequest() {
		return this.apiRequest;
	}
}
let x = new postMemeEndpoint();

module.exports = x.getRoute();