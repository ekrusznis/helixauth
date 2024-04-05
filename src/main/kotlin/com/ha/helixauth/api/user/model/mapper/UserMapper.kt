package com.ha.helixauth.api.user.model.mapper

import com.ha.helixauth.api.company.model.Company
import com.ha.helixauth.api.user.model.User
import com.ha.helixauth.api.user.model.dto.UserDto

object UserMapper {
    fun toDTO(user: User): UserDto = UserDto(
        id = user.id,
        username = user.username,
        password = user.password,
        firstName = user.firstName,
        lastName = user.lastName,
        avatar = user.avatar,
        companyId = user.company.id
    )

    fun toEntity(userDto: UserDto, company: Company): User = User(
        username = userDto.username,
        password = userDto.password,
        firstName = userDto.firstName,
        lastName = userDto.lastName,
        avatar = userDto.avatar,
        company = company
    )
}
