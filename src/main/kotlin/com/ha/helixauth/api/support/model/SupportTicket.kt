package com.ha.helixauth.api.support.model

import com.ha.helixauth.api.support.enum.TicketType
import com.ha.helixauth.api.user.model.User
import java.time.LocalDateTime
import javax.persistence.*

@Entity
@Table(name = "support_tickets")
data class SupportTicket(
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    val id: Long = 0,

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    val type: TicketType,

    @Column(nullable = false)
    val title: String,

    @Column(nullable = false, length = 1024)
    val description: String,

    @Column
    val attachment: String?,

    @Column(nullable = false)
    val createdAt: LocalDateTime = LocalDateTime.now(),

    @Column
    var updatedAt: LocalDateTime? = null,

    @Column
    var closedAt: LocalDateTime? = null,

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id")
    val user: User
)
