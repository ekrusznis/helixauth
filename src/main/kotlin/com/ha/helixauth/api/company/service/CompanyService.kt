package com.ha.helixauth.api.company.service

import com.ha.helixauth.api.company.model.Company
import com.ha.helixauth.api.company.repository.CompanyRepository
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.stereotype.Service

@Service
class CompanyService(@Autowired private val companyRepository: CompanyRepository) {

    fun registerCompany(company: Company): Company {
        // Initialize blockchain with genesis block containing company info
        val companyInfo = "Company Name: ${company.name}, " +
                "Street Address: ${company.street}, " +
                "City: ${company.city}," +
                "State: ${company.state}, " +
                "Zipcode: ${company.zip}"
        company.blockchain.addTransactionToBlockchain(companyInfo)

        return companyRepository.save(company)
    }

    fun findCompanyById(companyId: Long): Company {
        return companyRepository.findById(companyId).orElseThrow { RuntimeException("Company not found") }
    }
}
