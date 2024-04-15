package com.ha.helixauth.api.company.model.dto

import com.ha.helixauth.api.user.model.dto.UserDto

data class RegistrationDto(
    val user: UserDto,
    val company: CompanyDto,
    val subscription: SubscriptionDto
)
