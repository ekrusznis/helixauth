package com.ha.helixauth.api.company.controller

import com.ha.helixauth.api.company.model.dto.CancellationRequestDto
import com.ha.helixauth.api.company.model.dto.RegistrationDto
import com.ha.helixauth.api.company.model.dto.RegistrationResponseDto
import com.ha.helixauth.api.company.service.CompanyService
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.*

@RestController
@RequestMapping("/api/company")
class CompanyController(private val companyService: CompanyService) {

    @PostMapping("/register")
    fun register(@RequestBody registrationDto: RegistrationDto): ResponseEntity<RegistrationResponseDto> {
        return companyService.newRegistration(registrationDto)
    }

    @PostMapping("/cancel-request")
    fun requestCancellation(@RequestBody cancellationRequest: CancellationRequestDto): ResponseEntity<CancellationRequestDto> {
        return ResponseEntity.ok(companyService.requestCancellation(cancellationRequest))
    }
}
