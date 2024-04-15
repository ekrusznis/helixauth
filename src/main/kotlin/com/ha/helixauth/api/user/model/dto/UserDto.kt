package com.ha.helixauth.api.user.model.dto

import java.time.LocalDateTime

data class UserDto(
    val id: Long? = null,
    val email: String,
    val password: String,
    val firstName: String,
    val lastName: String,
    val avatar: String?,
    val companyId: Long,
    val sessionToken: String?,
    val sessionTokenExpiry: LocalDateTime?
)
