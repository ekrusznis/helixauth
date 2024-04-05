package com.ha.helixauth.api.core.service

import com.ha.helixauth.api.company.repository.CompanyRepository
import com.ha.helixauth.api.core.model.EndpointConfig
import com.ha.helixauth.api.core.repository.EndpointConfigRepository
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.stereotype.Service

@Service
class ConfigService(@Autowired private val companyRepository: CompanyRepository,
                    @Autowired private val endpointConfigRepository: EndpointConfigRepository
) {

    fun saveEndpointConfig(apiKey: String, endpointConfig: EndpointConfig): EndpointConfig {
        val company = companyRepository.findByApiKey(apiKey) ?: throw Exception("Company not found")
        endpointConfig.company = company
        return endpointConfigRepository.save(endpointConfig)
    }
}