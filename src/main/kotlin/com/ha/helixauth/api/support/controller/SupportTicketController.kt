package com.ha.helixauth.api.support.controller

import com.ha.helixauth.api.support.model.SupportTicket
import com.ha.helixauth.api.support.model.dto.SupportTicketDto
import com.ha.helixauth.api.support.service.SupportTicketService
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.*

@RestController
@RequestMapping("/api/help/tickets")
class SupportTicketController(private val supportTicketService: SupportTicketService) {

    @PostMapping
    fun createTicket(@RequestBody ticketDto: SupportTicketDto): ResponseEntity<SupportTicket> {
        val ticket = supportTicketService.createTicket(ticketDto)
        return ResponseEntity.ok(ticket)
    }

    // Implement additional endpoints as needed
}
