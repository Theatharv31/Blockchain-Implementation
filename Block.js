const SHA256 = require('crypto-js/sha256');

class Block {
    constructor(data, previousHash = '') {
        this.data = data;  // Assign the passed data to this.data
        this.previousHash = previousHash
    }
    toHash() {
        return SHA256(this.data + this.previousHash).toString();
    }
}

module.exports = Block;
