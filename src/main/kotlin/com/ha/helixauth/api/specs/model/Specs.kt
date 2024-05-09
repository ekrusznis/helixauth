package com.ha.helixauth.api.specs.model

import com.ha.helixauth.api.company.model.Company
import javax.persistence.Column
import javax.persistence.Entity
import javax.persistence.FetchType
import javax.persistence.GeneratedValue
import javax.persistence.GenerationType
import javax.persistence.Id
import javax.persistence.JoinColumn
import javax.persistence.ManyToOne
import javax.persistence.Table

@Entity
@Table(name = "specs")
class Specs(
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    val id: Long = 0,

    @Column(nullable = false)
    val path: String,

    @Column(nullable = false)
    val operation: String,

    @Column(nullable = false)
    val type: String = "",

    @Column(nullable = false)
    val service: String = "",

    @Column(columnDefinition = "jsonb", nullable = false)
    val labels: String? = null,

    @Column(nullable = false)
    val hits: Int = 0,

    @Column(columnDefinition = "jsonb", nullable = false)
    val roles: String,

    @ManyToOne(fetch = FetchType.LAZY) // Many specs belong to one company
    @JoinColumn(name = "company_id", referencedColumnName = "id")
    val company: Company
)
