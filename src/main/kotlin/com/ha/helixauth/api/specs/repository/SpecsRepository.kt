package com.ha.helixauth.api.specs.repository

import com.ha.helixauth.api.specs.model.Specs
import org.springframework.data.jpa.repository.JpaRepository

interface SpecsRepository : JpaRepository<Specs, Long>