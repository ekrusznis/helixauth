package com.ha.helixauth.api.company.model.mapper

import com.ha.helixauth.api.company.model.Company
import com.ha.helixauth.api.company.model.dto.CompanyDto

object CompanyMapper {
    fun toDTO(company: Company): CompanyDto = CompanyDto(
        id = company.id,
        name = company.name,
        phone = company.phone,
        street = company.street,
        city = company.city,
        state = company.state,
        zip = company.zip,
        apiKey = company.apiKey
    )

    fun toEntity(companyDto: CompanyDto): Company = Company(
        name = companyDto.name,
        phone = companyDto.phone,
        street = companyDto.street,
        city = companyDto.city,
        state = companyDto.state,
        zip = companyDto.zip,
        apiKey = null
    )
}
