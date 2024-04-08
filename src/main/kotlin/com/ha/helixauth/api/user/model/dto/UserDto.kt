package com.ha.helixauth.api.user.model.dto

import java.time.LocalDateTime

data class UserDto(
    val id: Long? = null,
    val username: String,
    val email: String,
    val password: String,
    val firstName: String,
    val lastName: String,
    val avatar: String, // URL to the avatar image
    val companyId: Long,
    val sessionToken: String?,
    val sessionTokenExpiry: LocalDateTime?
)
