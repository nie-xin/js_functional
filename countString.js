/**
 * Created by NIE Xin on 09/08/2014.
 */
module.exports = function(inputwords) {
    "use strict";

    return inputwords.reduce(function(acc, curr) {
        if (typeof acc[curr] === 'undefined') {
            acc[curr] = 1;
        } else {
            acc[curr] += 1;
        }
        //console.log(acc);
        return acc;
    }, {});
};

/* better solution
function countWords (arr) {
    "use strict";

    return arr.reduce(function(countMap, word) {
        countMap[word] = ++countMap[word] || 1;  // countMap[word]已存在就加一，否则视为第一次遇到，设为1
        return countMap;
    }, {});
}*/
