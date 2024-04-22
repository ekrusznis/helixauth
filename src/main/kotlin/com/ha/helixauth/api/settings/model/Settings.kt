package com.ha.helixauth.api.settings.model

import com.ha.helixauth.api.company.model.Company
import javax.persistence.Column
import javax.persistence.Entity
import javax.persistence.GeneratedValue
import javax.persistence.GenerationType
import javax.persistence.Id
import javax.persistence.JoinColumn
import javax.persistence.OneToOne
import javax.persistence.Table

@Entity
@Table(name = "company_settings")
class Settings(
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    val id: Long = 0,

    @Column(columnDefinition = "jsonb", nullable = false)
    val settings: String,

    @OneToOne
    @JoinColumn(name = "company_id", referencedColumnName = "id", unique = true)
    val company: Company
)
