package com.ha.helixauth.api.company.model.dto

import java.time.LocalDate

data class CancellationRequestDto(
    val companyId: Long,
    val userId: Long,
    val requestedDate: LocalDate,
    val cancelDate: LocalDate?,
    val status: String
)