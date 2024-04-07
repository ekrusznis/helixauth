package com.ha.helixauth.api.company.controller

import com.ha.helixauth.api.company.model.dto.CancellationRequestDto
import com.ha.helixauth.api.company.model.dto.CompanyDto
import com.ha.helixauth.api.company.model.mapper.CompanyMapper
import com.ha.helixauth.api.company.service.CompanyService
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.*

@RestController
@RequestMapping("/api/company")
class CompanyController(val companyService: CompanyService) {

    @PostMapping("/registerCompany")
    fun registerCompany(@RequestBody companyDTO: CompanyDto): ResponseEntity<CompanyDto> {
        val company = companyService.registerCompany(CompanyMapper.toEntity(companyDTO))
        return ResponseEntity.ok(CompanyMapper.toDTO(company))
    }

    @PostMapping("/cancel-request")
    fun requestCancellation(@RequestBody cancellationRequest: CancellationRequestDto): ResponseEntity<CancellationRequestDto> {
        return ResponseEntity.ok(companyService.requestCancellation(cancellationRequest))
    }
}
