/**
 * Endpoint class for returning bot data and description. Basically for service testing matters.
 *
 * @package tg-service
 * @author Ivan Ovcharenko ybutb88@gmail.com
 */

const client = require('../components/botClient')();
const filters = require('../components/filters');
const express = require('express');
const Endpoint = require('./endpoint.js');

class getBotInfoEndpoint extends Endpoint {
	getRoute() {
		return express.Router()
			.get('/', (req, res) => {
					let response = client.post(this);
					res.status(response[0]).send(response);
				}
			);
	}

	getRequest() {
		return {
			"url": '/getMe',
			"body": ""
		};
	}
}

module.exports = new getBotInfoEndpoint().getRoute();