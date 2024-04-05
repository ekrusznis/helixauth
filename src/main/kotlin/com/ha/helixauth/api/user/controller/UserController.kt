package com.ha.helixauth.api.user.controller

import com.ha.helixauth.api.company.service.CompanyService
import com.ha.helixauth.api.user.model.dto.LoginRequestDto
import com.ha.helixauth.api.user.model.dto.UserDto
import com.ha.helixauth.api.user.model.mapper.UserMapper
import com.ha.helixauth.api.user.service.UserService
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.PathVariable
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.PutMapping
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

@RestController
@RequestMapping("/api/user")
class UserController(
    @Autowired private val userService: UserService,
    @Autowired private val companyService: CompanyService
    ) {

    @PostMapping("/login")
    fun login(@RequestBody loginRequest: LoginRequestDto): ResponseEntity<*> {
        val user = userService.authenticateUser(loginRequest.email, loginRequest.password)
        return ResponseEntity.ok(user)
    }

    @PostMapping("/createUser")
    fun createUser(@RequestBody userDTO: UserDto): ResponseEntity<UserDto> {
        val user = userService.registerUser(userDTO, userDTO.companyId)

        return ResponseEntity.ok(UserMapper.toDTO(user))
    }
    @PutMapping("/{id}")
    fun updateUser(@PathVariable id: Long, @RequestBody userDTO: UserDto): ResponseEntity<UserDto> {
        val updatedUser = userService.updateUser(id, userDTO)
        return ResponseEntity.ok(UserMapper.toDTO(updatedUser))
    }
}
