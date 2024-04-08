package com.ha.helixauth.api.company.model.mapper

import com.ha.helixauth.api.company.enum.CancellationStatus
import com.ha.helixauth.api.company.model.AccountCancellation
import com.ha.helixauth.api.company.model.Company
import com.ha.helixauth.api.company.model.dto.CancellationRequestDto
import com.ha.helixauth.api.user.model.User

object CancellationRequestMapper {
    fun toDto(accountCancellation: AccountCancellation): CancellationRequestDto = CancellationRequestDto(
        companyId = accountCancellation.company.id,
        userId = accountCancellation.user.id,
        requestedDate = accountCancellation.requestedDate,
        cancelDate = accountCancellation.cancelDate,
        status = accountCancellation.cancellationStatus.name
    )

    fun toEntity(dto: CancellationRequestDto, company: Company, user: User): AccountCancellation = AccountCancellation(
        company = company,
        user = user,
        requestedDate = dto.requestedDate,
        cancelDate = dto.cancelDate,
        cancellationStatus = CancellationStatus.valueOf(dto.status.toUpperCase())
    )
}
