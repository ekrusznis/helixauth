package com.ha.helixauth.api.blockchain

import com.ha.helixauth.api.company.model.Company
import com.ha.helixauth.api.company.service.CompanyService
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.stereotype.Service

@Service
class BlockchainService(
    @Autowired private val companyService: CompanyService
) {

    fun registerCompanyWithBlockchain(company: Company): Company {
        val company = companyService.registerCompany(company)
        company.blockchain.addTransactionToBlockchain("Company ${company.name} registered")
        // Save the company with its updated blockchain to the database
        return company
    }

    // Methods for user and role management integrating blockchain operations.
}
