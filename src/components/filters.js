
const filters = function() {
    let pub = {};

    pub.base64Filter = function(string) {
        return string;
    };

    pub.linkFilter = function(string) {
        return string;
    };

    pub.requestLimitFilter = function(string) {
        return true;
    };

    return pub;
};

module.exports = filters();