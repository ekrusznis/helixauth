package com.ha.helixauth.api.role.model

import com.ha.helixauth.api.company.model.Company
import javax.persistence.Entity
import javax.persistence.GeneratedValue
import javax.persistence.GenerationType
import javax.persistence.Id
import javax.persistence.ManyToOne
import javax.persistence.Table

@Entity
@Table(name = "role")
class Role(
    @Id @GeneratedValue(strategy = GenerationType.AUTO)
    val id: Long = 0,
    var name: String,
    @ManyToOne
    var company: Company
)