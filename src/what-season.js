const CustomError = require("../extensions/custom-error");

const season = ['winter', 'winter', 'spring', 'spring', 'spring', 'summer', 'summer', 'summer', 'autumn', 'autumn', 'autumn', 'winter'];

module.exports = function getSeason(date) {
    if (!date) {
        return 'Unable to determine the time of year!';
    }

    if (!(date instanceof Date) || Object.prototype.toString.call(date) !== "[object Date]") {
        throw new Error();
    }

    return season[date.getMonth()];
};
