package com.ha.helixauth.api.company.model.dto

import com.ha.helixauth.api.core.model.ApiKey

data class CompanyDto(
    val id: Long? = null,
    val name: String,
    val phone: String,
    val street: String,
    val city: String,
    val state: String,
    val zip: Int,
    val apiKey: ApiKey?
)
