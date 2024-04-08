package com.ha.helixauth.api.user.repository

import com.ha.helixauth.api.user.model.User
import org.springframework.data.jpa.repository.JpaRepository

interface UserRepository : JpaRepository<User, Long> {
    fun findByEmailAndPassword(email: String, password: String): User
    fun findByToken(token: String): User
}
