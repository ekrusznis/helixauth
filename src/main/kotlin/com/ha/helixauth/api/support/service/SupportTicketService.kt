package com.ha.helixauth.api.support.service

import com.ha.helixauth.api.support.model.SupportTicket
import com.ha.helixauth.api.support.model.dto.SupportTicketDto
import com.ha.helixauth.api.support.repository.SupportTicketRepository
import com.ha.helixauth.api.user.service.UserService
import org.springframework.stereotype.Service

@Service
class SupportTicketService(
    private val userService: UserService,
    private val supportTicketRepository: SupportTicketRepository
    ) {

    fun createTicket(ticket: SupportTicketDto): SupportTicket {
        val user = userService.findUserById(ticket.userId)
        return supportTicketRepository.save<SupportTicket>(ticket.toEntity(user))
    }

    // Add more service methods as needed, e.g., for listing, updating, closing tickets
}