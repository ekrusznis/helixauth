package com.ha.helixauth.api.role.controller

import com.ha.helixauth.api.role.model.Role
import com.ha.helixauth.api.role.service.RoleService
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.PathVariable
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.PutMapping
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RequestParam
import org.springframework.web.bind.annotation.RestController

@RestController
@RequestMapping("/api/role")
class RoleController(val roleService: RoleService) {

    @PostMapping("/createRole")
    fun createRole(@RequestParam name: String,
                   @RequestParam companyId: Long): ResponseEntity<Role> {
        val role = roleService.createRole(name, companyId)
        return ResponseEntity.ok(role)
    }

    @PutMapping("/updateRole/{roleId}")
    fun updateRole(@PathVariable roleId: Long,
                   @RequestParam newName: String): ResponseEntity<Role> {
        val updatedRole = roleService.updateRole(roleId, newName)
        return ResponseEntity.ok(updatedRole)
    }

}
