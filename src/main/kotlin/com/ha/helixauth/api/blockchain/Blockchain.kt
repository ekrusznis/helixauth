package com.ha.helixauth.api.blockchain

import com.ha.helixauth.api.blockchain.model.Block

class Blockchain(private val difficulty: Int = 4) {
    @Volatile
    var chain: MutableList<Block> = mutableListOf(createGenesisBlock())

    private fun createGenesisBlock(): Block {
        // Create and mine the genesis block
        return Block(previousHash = "0", data = "Genesis Block").apply { mineBlock(difficulty) }
    }

    @Synchronized
    fun addBlock(newBlock: Block) {
        // Directly add a pre-mined block
        chain.add(newBlock)
    }

    fun addTransactionToBlockchain(transactionData: String) {
        // Create a new block with transaction data and mine it before adding
        val newBlock = Block(previousHash = chain.last().hash, data = transactionData).apply { mineBlock(difficulty) }
        addBlock(newBlock)
    }
}
