package com.ha.helixauth.api.core.model

import com.ha.helixauth.api.company.model.Company
import javax.persistence.Column
import javax.persistence.ElementCollection
import javax.persistence.Entity
import javax.persistence.GeneratedValue
import javax.persistence.GenerationType
import javax.persistence.Id
import javax.persistence.JoinColumn
import javax.persistence.ManyToOne

@Entity
class EndpointConfig(
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    var id: Long? = null,

    @Column(nullable = false)
    var path: String,

    @ManyToOne
    @JoinColumn(name = "company_id")
    var company: Company,

    @Column(nullable = false)
    var operation: String,

    @ElementCollection
    var roles: List<String>
)