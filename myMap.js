/**
 * Created by NIE Xin on 13/08/2014.
 */
module.exports = function arrayMap(arr, fn) {
    "use strict";

    return arr.reduce(function(pre, cur) {
        return pre.concat(fn(cur));
    }, []);
};