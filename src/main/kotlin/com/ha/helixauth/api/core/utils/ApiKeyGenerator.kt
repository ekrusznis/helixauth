package com.ha.helixauth.api.core.utils

import org.bouncycastle.asn1.pkcs.RSAPrivateKey
import org.bouncycastle.asn1.pkcs.RSAPublicKey
import org.springframework.stereotype.Component
import java.security.KeyPairGenerator
import java.security.SecureRandom
import java.util.*

@Component
object ApiKeyGenerator {
    fun generateKeyPair(): Pair<String, String> {
        val keyPairGen = KeyPairGenerator.getInstance("RSA")
        keyPairGen.initialize(2048, SecureRandom())
        val pair = keyPairGen.generateKeyPair()

        val publicKey = pair.public as RSAPublicKey
        val privateKey = pair.private as RSAPrivateKey

        val publicKeyString = Base64.getEncoder().encodeToString(publicKey.encoded)
        val privateKeyString = Base64.getEncoder().encodeToString(privateKey.encoded)

        return Pair(publicKeyString, privateKeyString)
    }
}
