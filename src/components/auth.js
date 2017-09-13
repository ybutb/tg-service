const config = require('../config/config.json');
const crypto = require('crypto');
const logger = require( '../logger' );

const auth = function () {
    pub = {};

    const tokenHash = config.apiKeyHash;
    const secret    = config.salt;

    pub.authenticateToken = function(userToken) {
        let userHash = crypto.createHmac('sha256', secret)
            .update(userToken)
            .digest('hex');

        if (userHash !== tokenHash) {
            logger.log('Failed to authenticate user with the token: ' + userToken);

            return false;
        }

        return true;
    };

    return pub;
};

module.exports = auth;