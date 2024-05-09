package com.ha.helixauth.api.role.service

import com.ha.helixauth.api.company.repository.CompanyRepository
import com.ha.helixauth.api.role.model.Role
import com.ha.helixauth.api.role.repository.RoleRepository
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.stereotype.Service

@Service
class RoleService(@Autowired private val roleRepository: RoleRepository,
                  @Autowired private val companyRepository: CompanyRepository
) {

    fun createRole(name: String, companyId: Long): Role {
        val company = companyRepository.findById(companyId)
            .orElseThrow { RuntimeException("Company not found") }
        val role = Role(name = name, company = company)

        roleRepository.save(role)

        val roleCreationData = "Created Role: $name"
        company.blockchain.addTransactionToBlockchain(roleCreationData)
        companyRepository.save(company)

        return role
    }

    fun updateRole(roleId: Long, newName: String): Role {
        val role = roleRepository.findById(roleId)
            .orElseThrow { RuntimeException("Role not found") }
        role.name = newName
        roleRepository.save(role)

        // Assume we can fetch the company from the role directly or through another association
        val company = role.company
        val roleUpdateData = "Updated Role: $newName"
        company.blockchain.addTransactionToBlockchain(roleUpdateData)
        companyRepository.save(company)

        return role
    }
}

