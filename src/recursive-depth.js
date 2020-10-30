const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let depth = 0;

    if (!Array.isArray(arr)) {
      return depth;
    } else {
      depth++;
    }

    let innerDepth = 0;

    for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i])) {
        let calculatedDepth = this.calculateDepth(arr[i]);

        if (calculatedDepth > innerDepth) {
          innerDepth = calculatedDepth;
        }
      }
    }

    return depth + innerDepth;
  }
};