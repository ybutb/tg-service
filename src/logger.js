/**
 * Puts logs to the text file.
 *
 * @package tg-service
 * @author Ivan Ovcharenko ybutb88@gmail.com
 */

'use strict';
const fs = require('fs');
const config = require('./../config/config.json');

const logger = () => {
    let pub = {};

    const path = config.logPath;

    pub.log = (message) => {
        let currentTime = Date.now();

        fs.appendFile(path, '[' + currentTime + '] ' + message + "\n", function (err) {
            if (err) throw err;
        });
    };

    return pub;
};

module.exports = logger();