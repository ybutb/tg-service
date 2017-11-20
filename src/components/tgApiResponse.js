/**
 * Telegram API response class.
 *
 * @package tg-service
 * @author Ivan Ovcharenko ybutb88@gmail.com
 */

class tgApiResponse {
	body = {};
	statusCode = 500;
	error = false;

	constructor(statusCode, body) {
		this.statusCode = statusCode;
		this.body = body;
	}

	isSuccessful() {
		return !this.error;
	}

	setUnsuccessful() {
		this.error = true;
	}

	setStatusCode() {
		this.statusCode = 500;
	}

	getBody() {
		return this.body;
	}
}

module.exports = tgApiResponse;