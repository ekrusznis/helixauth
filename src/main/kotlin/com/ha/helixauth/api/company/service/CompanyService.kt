package com.ha.helixauth.api.company.service

import com.ha.helixauth.api.company.model.Company
import com.ha.helixauth.api.company.model.dto.CancellationRequestDto
import com.ha.helixauth.api.company.model.dto.RegistrationDto
import com.ha.helixauth.api.company.model.dto.RegistrationResponseDto
import com.ha.helixauth.api.company.model.mapper.CancellationRequestMapper
import com.ha.helixauth.api.company.model.mapper.CompanyMapper
import com.ha.helixauth.api.company.repository.AccountCancellationRepository
import com.ha.helixauth.api.company.repository.CompanyRepository
import com.ha.helixauth.api.user.model.dto.UserDto
import com.ha.helixauth.api.user.service.UserService
import com.ha.helixauth.api.utils.EmailService
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.http.ResponseEntity
import org.springframework.stereotype.Service
import javax.persistence.EntityNotFoundException

@Service
class CompanyService(
    @Autowired private val companyRepository: CompanyRepository,
    @Autowired private val accountCancellationRepository: AccountCancellationRepository,
    @Autowired private val userService: UserService,
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
        val user = userService.findUserById(cancellationRequest.userId)

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

    fun newRegistration(registrationDto: RegistrationDto): ResponseEntity<RegistrationResponseDto> {
        val company = this.registerCompany(CompanyMapper.toEntity(registrationDto.company))

        company.blockchain.addTransactionToBlockchain(
            "Company Name: ${company.name}, Address: ${company.street}, ${registrationDto.company.city}, ${registrationDto.company.state}, ${registrationDto.company.zip}"
        )
        val userDto = UserDto(
            companyId = company.id,
            email = registrationDto.user.email,
            firstName = registrationDto.user.firstName,
            lastName = registrationDto.user.lastName,
            password = registrationDto.user.password,
            avatar = null,
            sessionToken = null,
            sessionTokenExpiry = null
        )
        val user = userService.registerUser(userDto, company.id)

        // TODO - Process payment and save transaction details
//        val paymentInfo = paymentService
//            .processPayment(registrationDto.subscription.paymentToken)
//
//        paymentService.saveTransactionDetails(
//            paymentInfo.transactionId,
//            registrationDto.subscription.transactionId
//        )
        val newRegister = RegistrationResponseDto(userId = user.id, companyId = company.id)
        return ResponseEntity.ok(newRegister)

    }
}
