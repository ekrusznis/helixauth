package com.ha.helixauth.api.core.repository

import com.ha.helixauth.api.core.model.ApiKey
import org.springframework.data.jpa.repository.JpaRepository

interface ApiKeyRepository : JpaRepository<ApiKey, Long>