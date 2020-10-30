const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
    let addition = '';

    if (options.addition !== undefined) {
        addition += options.addition;
    }

    if (options.additionRepeatTimes) {
        let additionSeparator = options.additionSeparator ? options.additionSeparator : '|';
        addition += additionSeparator;

        addition = addition.repeat(options.additionRepeatTimes);
        addition = addition.substring(0, addition.length - additionSeparator.length);
    }

    let result = str + addition;

    if (options.repeatTimes) {
        let separator = options.separator ? options.separator : '+';
        result += separator;

        result = result.repeat(options.repeatTimes);
        result = result.substring(0, result.length - separator.length)
    }

    return result;
};
  