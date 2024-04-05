package com.ha.helixauth.api.core.repository

import com.ha.helixauth.api.core.model.EndpointConfig
import org.springframework.data.jpa.repository.JpaRepository

interface EndpointConfigRepository : JpaRepository<EndpointConfig, Long>