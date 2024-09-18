const Block = require('./Block');

class Blockchain {
    constructor() {
        // Create the Genesis block with no previous hash (empty string)
        const genesisBlock = new Block("Genesis Block", "");
        this.chain = [genesisBlock];  // Initialize the chain array with the Genesis block
    }

    addBlock(newBlock) {
        // Set the previousHash of the new block to the hash of the last block in the chain
        const lastBlock = this.chain[this.chain.length - 1];
        newBlock.previousHash = lastBlock.toHash();

        // Push the new block into the chain array
        this.chain.push(newBlock);
    }

    isValid() {
        // Loop through the blockchain to validate each block
        for (let i = 1; i < this.chain.length; i++) {
            const currentBlock = this.chain[i];
            const previousBlock = this.chain[i - 1];

            // Check if the previousHash of the current block matches the hash of the previous block
            if (currentBlock.previousHash !== previousBlock.toHash()) {
                return false;  // Blockchain is invalid
            }
        }

        return true;  // Blockchain is valid
    }
}

module.exports = Blockchain;
