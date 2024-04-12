package com.ha.helixauth.api.user.controller

import com.ha.helixauth.api.company.service.CompanyService
import com.ha.helixauth.api.user.model.dto.LoginRequestDto
import com.ha.helixauth.api.user.model.dto.UserDto
import com.ha.helixauth.api.user.model.mapper.UserMapper
import com.ha.helixauth.api.user.service.UserService
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.http.HttpStatus
import org.springframework.http.ResponseEntity
import org.springframework.validation.BindingResult
import org.springframework.web.bind.annotation.PathVariable
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.PutMapping
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController
import javax.validation.Valid

@RestController
@RequestMapping("/api/user")
class UserController(
    @Autowired private val userService: UserService,
    @Autowired private val companyService: CompanyService
    ) {

    // TODO - bindingResult will return a list of DTO validation errors, we should put that on all validated dto's
    @PostMapping("/login")
    fun login(
        @Valid @RequestBody loginRequest: LoginRequestDto,
        bindingResult: BindingResult
    ): ResponseEntity<UserDto> {
        println("login REQUEST:: ${loginRequest.email}, ${loginRequest.password}")
        val user = userService.authenticateUser(loginRequest.email, loginRequest.password)
        return ResponseEntity.ok(user)
    }
    @PostMapping("/validateToken")
    fun validateToken(@RequestBody token: String): ResponseEntity<String> {
        return if (userService.validateToken(token) == true) {
            ResponseEntity.ok("Token is valid")
        } else {
            ResponseEntity.status(HttpStatus.UNAUTHORIZED).build()
        }
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
