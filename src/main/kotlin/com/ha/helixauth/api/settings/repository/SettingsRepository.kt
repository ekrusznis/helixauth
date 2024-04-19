package com.ha.helixauth.api.settings.repository

import com.ha.helixauth.api.settings.model.Settings
import org.springframework.data.jpa.repository.JpaRepository

interface SettingsRepository : JpaRepository<Settings, Long> {
    fun findByCompanyId(companyId: Long): Settings
}