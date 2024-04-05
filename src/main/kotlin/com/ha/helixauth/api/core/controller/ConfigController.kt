package com.ha.helixauth.api.core.controller

import com.ha.helixauth.api.core.model.EndpointConfig
import com.ha.helixauth.api.core.service.ConfigService
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RequestHeader
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

@RestController
@RequestMapping("/api/config")
class ConfigController(@Autowired private val configService: ConfigService) {

    @PostMapping("/upload")
    fun uploadEndpointConfig(@RequestHeader("API-Key") apiKey: String,
                             @RequestBody endpointConfigs: List<EndpointConfig>): ResponseEntity<String> {
        endpointConfigs.forEach { configService.saveEndpointConfig(apiKey, it) }
        return ResponseEntity.ok("Configurations saved successfully.")
    }
}