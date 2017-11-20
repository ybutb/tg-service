/**
 * Abstract service endpoint class.
 *
 * @package tg-service
 * @author Ivan Ovcharenko ybutb88@gmail.com
 */

class Endpoint {
	constructor() {
		if (new.target === Endpoint) {
			throw new TypeError("Cannot construct Endpoint instances directly");
		}
	}
	getRoute(){};

	getRequest(){};
}

module.exports = Endpoint;