/**
 * Created by NIE Xin on 09/08/2014.
 */
function reduce(arr, fn, init) {
    'use strict';

    if (!arr.length) {      // end recursion
        return init;
    }

    return reduce(arr, fn, fn(init, arr.shift(), 0, arr));
}

module.exports = reduce;

/*Suggest solution
function reduce(arr, fn, initial) {
    return (function reduceOne(index, value) {
        if (index > arr.length - 1) return value // end condition
        return reduceOne(index + 1, fn(value, arr[index], index, arr)) // calculate & pass values to next step
    })(0, initial) // IIFE. kick off recursion with initial values
}
*/
