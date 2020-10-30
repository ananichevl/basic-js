const CustomError = require("../extensions/custom-error");

const chainMaker = {
    chain: '',
    getLength() {
        return this.chain.split('~~').length;
    },
    addLink(value) {
        if (this.chain) {
            this.chain += `~~( ${value} )`;
        } else {
            this.chain += `( ${value} )`;
        }
        return this;
    },
    removeLink(position) {
        let arr = this.chain.split('~~');

        if (position > arr.length || position < 0) {
            this.chain = '';
            throw new Error();
        }

        arr.splice(position - 1, 1);
        this.chain = arr.join('~~');
        return this;
    },
    reverseChain() {
        this.chain = this.chain.split('~~').reverse().join('~~');
        return this;
    },
    finishChain() {
        let res = this.chain;
        this.chain = '';
        return res;
    }
};

module.exports = chainMaker;
