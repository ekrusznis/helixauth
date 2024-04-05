package com.ha.helixauth.api.company.repository

import com.ha.helixauth.api.company.model.Company
import org.springframework.data.jpa.repository.JpaRepository

interface CompanyRepository : JpaRepository<Company, Long> {
    fun findByApiKey(apiKey: String): Company?
}
