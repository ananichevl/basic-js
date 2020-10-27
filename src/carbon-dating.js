const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sample) {
  let sampleInt = parseInt(sample);

  if (typeof sample !== 'string' || !sampleInt || sampleInt < 0 || sampleInt > 16) {
    return false;
  }

  let t = Math.log2(MODERN_ACTIVITY / sampleInt) * HALF_LIFE_PERIOD / 0.693;

  return Math.ceil(t);
};
