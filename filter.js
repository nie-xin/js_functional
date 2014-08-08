/**
 * Created by NIE Xin on 09/08/2014.
 */

module.exports = function (messages) {
    "use strict";

    return messages.filter(function (msg) {
        return msg.message.length < 50;
    }).map(function (msg) {
        //console.log(msg);
        return msg.message;
    });
};
