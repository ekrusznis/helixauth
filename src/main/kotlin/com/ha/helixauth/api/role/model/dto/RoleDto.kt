package com.ha.helixauth.api.role.model.dto

import com.ha.helixauth.api.company.model.Company

data class RoleDto(
    val id: Long? = null,
    val name: String,
    val company: Company,
    val smartContract: String
)
