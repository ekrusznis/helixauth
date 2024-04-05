package com.ha.helixauth.api.core.utils

import java.security.SecureRandom
import java.util.*

object ApiKeyGenerator {
    fun generate(): String {
        val uuidPart = UUID.randomUUID().toString().replace("-", "")
        val randomPart = ByteArray(16).apply { SecureRandom().nextBytes(this) }.joinToString("") { "%02x".format(it) }
        return uuidPart + randomPart
    }
}
