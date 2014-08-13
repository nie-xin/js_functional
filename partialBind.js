/**
 * Created by NIE Xin on 11/08/2014.
 */
module.exports = function(namespace) {
    'use strict';

    return console.log.bind(console, namespace);
};

