package com.ha.helixauth.api.company.model

import com.ha.helixauth.api.blockchain.Blockchain
import com.ha.helixauth.api.core.model.ApiKey
import com.ha.helixauth.api.core.model.EndpointConfig
import com.vladmihalcea.hibernate.type.json.JsonBinaryType
import org.hibernate.annotations.Type
import org.hibernate.annotations.TypeDef
import javax.persistence.CascadeType
import javax.persistence.Column
import javax.persistence.Entity
import javax.persistence.GeneratedValue
import javax.persistence.GenerationType
import javax.persistence.Id
import javax.persistence.OneToMany
import javax.persistence.OneToOne
import javax.persistence.Table

@Entity
@Table(name = "company")
@TypeDef(name = "jsonb", typeClass = JsonBinaryType::class)
class Company(
    @Id @GeneratedValue(strategy = GenerationType.AUTO)
    val id: Long = 0,
    var name: String,
    var phone: String,
    var street: String,
    var city: String,
    var state: String,
    var zip: Int,
    @OneToOne(mappedBy = "company", cascade = [CascadeType.ALL])
    var apiKey: ApiKey?,

    @OneToMany(mappedBy = "company", cascade = [CascadeType.ALL])
    var endpointConfigs: List<EndpointConfig> = mutableListOf(),

    @Type(type = "jsonb")
    @Column(columnDefinition = "jsonb")
    var blockchain: Blockchain = Blockchain()
)
