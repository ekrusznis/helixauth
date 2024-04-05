package com.ha.helixauth.api.role.model.mapper

import com.ha.helixauth.api.role.model.Role
import com.ha.helixauth.api.role.model.dto.RoleDto

fun roleToRoleDTO(role: Role): RoleDto = RoleDto(
    id = role.id,
    name = role.name,
    company = role.company,
    smartContract = role.smartContract
)

fun roleDTOToRole(roleDto: RoleDto): Role = Role(
    name = roleDto.name,
    company = roleDto.company,
    smartContract = roleDto.smartContract
)