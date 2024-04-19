package com.ha.helixauth.api.core.controller

import com.ha.helixauth.api.core.service.ConfigService
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

@RestController
@RequestMapping("/api")
class ConfigController(@Autowired private val configService: ConfigService) {

}