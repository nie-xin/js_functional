/**
 * Created by NIE Xin on 10/08/2014.
 */
module.exports = function() {
    "use strict";

    for (var i = 0, count = 0; i < arguments.length; i++) {
        if (Object.prototype.hasOwnProperty.call(arguments[i], 'quack')) {
            ++count;
        }
    }

    return count;
};

/* Might be a nice-looking solution, but using
Array.prototype.slice.call(arguments) will cause performance issue here.

function duckCount() {
    return Array.prototype.slice.call(arguments).filter(function(obj) {
        return Object.prototype.hasOwnProperty.call(obj, 'quack')
    }).length
}

module.exports = duckCount
*/
