/**
 * Created by NIE Xin on 09/08/2014.
 */
module.exports = function (goodUsers) {
    "use strict";

    return function (users) {
        return users.every(function (user) {
            return goodUsers.some(function (goodUser) {
                return goodUser.id === user.id;
            });
        });
    };
};
