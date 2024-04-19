package com.ha.helixauth.api.settings.model.dto

data class SettingsDto(
    val id: Long,
    val settings: String,
    val companyId: Long
)
