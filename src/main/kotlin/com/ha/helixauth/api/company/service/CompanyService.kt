package com.ha.helixauth.api.company.service

import com.ha.helixauth.api.company.model.Company
import com.ha.helixauth.api.company.model.dto.CancellationRequestDto
import com.ha.helixauth.api.company.model.mapper.CancellationRequestMapper
import com.ha.helixauth.api.company.repository.AccountCancellationRepository
import com.ha.helixauth.api.company.repository.CompanyRepository
import com.ha.helixauth.api.user.repository.UserRepository
import com.ha.helixauth.api.utils.EmailService
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.stereotype.Service
import javax.persistence.EntityNotFoundException

@Service
class CompanyService(
    @Autowired private val companyRepository: CompanyRepository,
    @Autowired private val accountCancellationRepository: AccountCancellationRepository,
    @Autowired private val userRepository: UserRepository,
    @Autowired private val emailService: EmailService
) {

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
    fun requestCancellation(cancellationRequest: CancellationRequestDto): CancellationRequestDto {
        val company = companyRepository.findById(cancellationRequest.companyId)
            .orElseThrow { EntityNotFoundException("Company not found") }
        val user = userRepository.findById(cancellationRequest.userId)
            .orElseThrow { EntityNotFoundException("User not found") }

        var accountCancellation = CancellationRequestMapper.toEntity(cancellationRequest, company, user)
        accountCancellation = accountCancellationRepository.save(accountCancellation)

        // Send email notification logic
        emailService.sendEmail(
            templateName = "cancellationRequest",
            to = user.email,
            subject = "Account Cancellation Request",
            variables = null
            // Additional parameters for the email template might be passed here
        )

        return CancellationRequestMapper.toDto(accountCancellation)
    }

    fun findCompanyById(companyId: Long): Company {
        return companyRepository.findById(companyId).orElseThrow { RuntimeException("Company not found") }
    }
}
