package com.ha.helixauth.api.company.model

import com.ha.helixauth.api.company.enum.CancellationStatus
import com.ha.helixauth.api.user.model.User
import java.time.LocalDate
import javax.persistence.Column
import javax.persistence.Entity
import javax.persistence.EnumType
import javax.persistence.Enumerated
import javax.persistence.GeneratedValue
import javax.persistence.GenerationType
import javax.persistence.Id
import javax.persistence.JoinColumn
import javax.persistence.ManyToOne
import javax.persistence.Table

@Entity
@Table(name = "account_cancellation")
class AccountCancellation(
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    val id: Long = 0,

    @ManyToOne
    @JoinColumn(name = "company_id", nullable = false)
    var company: Company,

    @Column(nullable = false)
    var requestedDate: LocalDate,

    @ManyToOne
    @JoinColumn(name = "user_id", nullable = false)
    var user: User,

    var cancelDate: LocalDate? = null,

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    var cancellationStatus: CancellationStatus = CancellationStatus.OPEN
)

