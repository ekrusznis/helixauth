package com.ha.helixauth.api.support.model.dto

import com.ha.helixauth.api.support.enum.TicketType
import com.ha.helixauth.api.support.model.SupportTicket
import com.ha.helixauth.api.user.model.User
import java.time.LocalDateTime
import java.util.*

data class SupportTicketDto(
    val type: String,
    val title: String,
    val description: String,
    val attachment: String?, // Assuming this is a URL or path to the attachment
    val userId: Long
) {
    // Convert DTO to entity
    fun toEntity(user: User): SupportTicket = SupportTicket(
        type = TicketType.valueOf(type.uppercase(Locale.getDefault())),
        title = title,
        description = description,
        attachment = attachment,
        createdAt = LocalDateTime.now(),
        user = user
    )
}