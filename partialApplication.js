var slice = Array.prototype.slice;

function logger(namesapce) {
    'use strict';

    return function() {
        var msg = slice.call(arguments).reduce(function(pre, cur) {
            return pre + ' ' + cur;
        });
        console.log(namesapce + ' ' + msg);
    };
}

module.exports = logger;


/* Better solution
var slice = Array.prototype.slice

function logger(namespace) {
    return function() {
        console.log.apply(console, [namespace].concat(slice.call(arguments)))
    }
}

module.exports = logger
*/

/*
 * Note:
 * 1. console.log takes any nb of arguments and print them separated by spaces
 * 2. apply vs call: apply lets you invoke the function with arguments as an array; call requires the parameters be listed explicitly.
 */