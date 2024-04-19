package com.ha.helixauth.api.settings.controller

import com.ha.helixauth.api.settings.model.dto.SettingsDto
import com.ha.helixauth.api.settings.service.SettingsService
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.PathVariable
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.PutMapping
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

@RestController
@RequestMapping("/api/settings")
class SettingsController(
    @Autowired private val settingsService: SettingsService
    ) {

    @PutMapping("/key")
    fun updateKeyPair(
        @RequestBody companyId: Long
    ): ResponseEntity<String> {
        return settingsService.generateNewKeyPair(companyId)
    }

    @PostMapping("/key")
    fun generateNewKeyPair(
        @RequestBody companyId: Long
    ): ResponseEntity<String> {
        return settingsService.generateNewKeyPair(companyId)
    }

    @PutMapping("/{companyId}")
    fun updateSettings(
        @PathVariable companyId: Long,
        @RequestBody updatedSettings: List<Map<String, Any>>
    ): ResponseEntity<SettingsDto> {
        return settingsService.updateSettings(companyId, updatedSettings)
    }

}