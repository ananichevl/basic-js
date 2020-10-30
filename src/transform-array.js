const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
    let temp = Array.from(arr);
    let res = [];

    if (!Array.isArray(arr)) {
        throw new Error();
    }

    for (let i = 0; i < temp.length; i++) {
        if (temp[i] === '--discard-next') {
            if (temp[i + 1] !== undefined) {
                i++;
            }
        } else if (temp[i] === '--discard-prev') {
            if (temp[i - 1] !== undefined && '--discard-next' !== temp[i - 2]) {
                res.splice(res.length - 1, 1);
            }
        } else if (temp[i] === '--double-next') {
            if (temp[i + 1] !== undefined && !checkTransformString(temp[i + 1])) {
                res.push(arr[i + 1]);
            }
        } else if (temp[i] === '--double-prev') {
            if (temp[i - 1] !== undefined && !checkTransformString(temp[i - 1]) && '--discard-next' !== temp[i - 2]) {
                res.push(temp[i - 1]);
            }
        } else {
            res.push(temp[i]);
        }
    }

    return res;
};

const checkTransformString = (transformString) => {
    return transformString === '--discard-next' ||
        transformString === '--discard-prev' ||
        transformString === '--double-next' ||
        transformString === '--double-prev';
};