package com.ha.helixauth.api.support.repository

import com.ha.helixauth.api.support.model.SupportTicket
import org.springframework.data.jpa.repository.JpaRepository

interface SupportTicketRepository : JpaRepository<SupportTicket, Long>
