const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
    if (!members) {
        return false;
    }

    let secret = '';

    for (let i = 0; i < members.length; i++) {
        if (typeof members[i] === 'string') {
            secret += members[i].trim()[0];
        }
    }

    return secret.toUpperCase().split("").sort().join("");
};
