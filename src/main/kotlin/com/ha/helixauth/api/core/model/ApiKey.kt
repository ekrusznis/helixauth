package com.ha.helixauth.api.core.model

import com.ha.helixauth.api.company.model.Company
import javax.persistence.Column
import javax.persistence.Entity
import javax.persistence.GeneratedValue
import javax.persistence.GenerationType
import javax.persistence.Id
import javax.persistence.JoinColumn
import javax.persistence.OneToOne

@Entity
class ApiKey(
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    val id: Long = 0,

    @Column(nullable = false, unique = true)
    var key: String,

    @OneToOne
    @JoinColumn(name = "company_id", referencedColumnName = "id")
    var company: Company
)
