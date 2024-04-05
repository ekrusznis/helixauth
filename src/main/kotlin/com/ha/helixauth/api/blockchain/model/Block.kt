package com.ha.helixauth.api.blockchain.model

import java.security.MessageDigest

data class Block(
    val previousHash: String,
    val data: String,
    val timestamp: Long = System.currentTimeMillis(),
    var hash: String = "",
    var nonce: Int = 0
) {
    private fun calculateHash(): String {
        return (previousHash + timestamp + nonce + data).sha256()
    }

    fun mineBlock(difficulty: Int) {
        val target = "0".repeat(difficulty)
        while (this.hash.substring(0, difficulty) != target) {
            nonce++
            hash = calculateHash()
        }
    }
}

fun String.sha256(): String {
    val bytes = MessageDigest.getInstance("SHA-256").digest(this.toByteArray())
    return bytes.joinToString("") { "%02x".format(it) }
}
