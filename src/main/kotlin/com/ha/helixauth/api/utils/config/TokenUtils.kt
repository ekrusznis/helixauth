package com.ha.helixauth.api.utils.config

import java.security.SecureRandom
import java.time.LocalDateTime

object TokenUtils {
    private const val TOKEN_LENGTH = 32
    private const val EXPIRATION_MINUTES = 30

    fun generateToken(): String {
        val random = SecureRandom()
        val token = ByteArray(TOKEN_LENGTH)
        random.nextBytes(token)
        return token.joinToString("") { "%02x".format(it) }
    }

    fun generateExpiry(): LocalDateTime {
        return LocalDateTime.now().plusMinutes(EXPIRATION_MINUTES.toLong())
    }

    fun isTokenExpired(expiry: LocalDateTime): Boolean {
        return LocalDateTime.now().isAfter(expiry)
    }
}
