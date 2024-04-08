package com.ha.helixauth.api.company.repository

import com.ha.helixauth.api.company.model.AccountCancellation
import org.springframework.data.jpa.repository.JpaRepository

interface AccountCancellationRepository: JpaRepository<AccountCancellation, Long> {}

