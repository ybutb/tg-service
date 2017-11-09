'use strict';
const fs = require('fs');
const config = require('./../config/config.json');

const logger = () => {
    let pub = {};

    const path = config.logPath;

    pub.log = (message) => {
        fs.writeFile(path, message, function (err) {
            if (err) throw err;
        });
    };

    return pub;
};

module.exports = logger();