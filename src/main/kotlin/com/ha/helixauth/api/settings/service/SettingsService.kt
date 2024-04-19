package com.ha.helixauth.api.settings.service

import com.google.gson.Gson
import com.google.gson.reflect.TypeToken
import com.ha.helixauth.api.company.repository.CompanyRepository
import com.ha.helixauth.api.core.model.ApiKey
import com.ha.helixauth.api.core.repository.ApiKeyRepository
import com.ha.helixauth.api.core.utils.ApiKeyGenerator
import com.ha.helixauth.api.settings.model.Settings
import com.ha.helixauth.api.settings.model.dto.SettingsDto
import com.ha.helixauth.api.settings.repository.SettingsRepository
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.data.rest.webmvc.ResourceNotFoundException
import org.springframework.http.ResponseEntity
import org.springframework.stereotype.Service

@Service
class SettingsService(
    @Autowired private val settingsRepository: SettingsRepository,
    @Autowired private val companyRepository: CompanyRepository,
    @Autowired private val apiKeyRepository: ApiKeyRepository,
    @Autowired private val apiKeyGenerator: ApiKeyGenerator
) {

    fun generateNewKeyPair(companyId: Long): ResponseEntity<String> {
        val company = companyRepository.findById(companyId).orElseThrow {
            ResourceNotFoundException("No Company: $companyId was found")
        }

        val keys = apiKeyGenerator.generateKeyPair()
        val apiKey = ApiKey(
            company = company,
            key = "valid",
            public_key = keys.first,
            secret_key = keys.second
        )

        apiKeyRepository.save(apiKey)

        return ResponseEntity.ok(keys.first)
    }

    fun updateSettings(companyId: Long, updatedSettings: List<Map<String, Any>>): ResponseEntity<SettingsDto> {
        val company = companyRepository.findById(companyId).orElseThrow {
            ResourceNotFoundException("No Company with id: $companyId found") }
        val existingSettings = settingsRepository.findByCompanyId(companyId)

        val settingsMap: MutableMap<String, Any> = Gson().fromJson(existingSettings.settings, object : TypeToken<MutableMap<String, Any>>() {}.type)

        for (updatedSetting in updatedSettings) {
            val settingName = updatedSetting.keys.first()
            val newValue = updatedSetting[settingName]
            settingsMap[settingName] = newValue as Any
        }

        val updatedSettingsJson = Gson().toJson(settingsMap)

        val newSettings = Settings(
            id = existingSettings.id,
            company = company,
            settings = updatedSettingsJson
        )
        settingsRepository.save(newSettings)

        return ResponseEntity.ok(SettingsDto(newSettings.id, newSettings.settings, newSettings.company.id))

    }
}