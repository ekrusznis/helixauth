package com.ha.helixauth.api.role.repository

import com.ha.helixauth.api.role.model.Role
import org.springframework.data.jpa.repository.JpaRepository

interface RoleRepository : JpaRepository<Role, Long>