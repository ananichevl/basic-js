const CustomError = require("../extensions/custom-error");

const aCode = 'a'.charCodeAt(0);

class VigenereCipheringMachine {
    constructor(direct) {
        this.direct = true;

        if (direct !== undefined) {
            this.direct = direct;
        }
    }

    encrypt(string, key) {
        if (!string || !key) {
            throw new Error();
        }

        let res = '';
        string = string.toLowerCase();

        key = key.toLowerCase();

        while (key.length < string.length) {
          key += key;
        }

        key = key.slice(0, string.length);

        let keyIt = 0;

        for (let i = 0; i < string.length; i++) {
          if (string[i].match('[a-z]')) {
            res += String.fromCharCode(((string.charCodeAt(i) - aCode) + (key.charCodeAt(keyIt) - aCode)) % 26 + aCode);
            keyIt++;
          } else {
            res += string[i];
          }
        }

        return this.direct ? res.toUpperCase() : res.toUpperCase().split("").reverse().join("");
    }

    decrypt(string, key) {
        if (!string || !key) {
            throw new Error();
        }

      let res = '';
      string = string.toLowerCase();

      key = key.toLowerCase();

      while (key.length < string.length) {
        key += key;
      }

      key = key.slice(0, string.length);

      let keyIt = 0;

      for (let i = 0; i < string.length; i++) {
        if (string[i].match('[a-z]')) {
          res += String.fromCharCode(((string.charCodeAt(i) - aCode) - (key.charCodeAt(keyIt) - aCode) + 26) % 26 + aCode);
          keyIt++;
        } else {
          res += string[i];
        }
      }

      return this.direct ? res.toUpperCase() : res.toUpperCase().split("").reverse().join("");
    }
}

module.exports = VigenereCipheringMachine;
