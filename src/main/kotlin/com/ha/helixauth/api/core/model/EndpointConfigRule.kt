package com.ha.helixauth.api.core.model

import com.ha.helixauth.api.role.model.Role
import javax.persistence.*

@Entity
@Table(name = "endpoint_config_role")
class EndpointConfigRole(
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    val id: Long = 0,

    @ManyToOne
    @JoinColumn(name = "endpoint_config_id", referencedColumnName = "id")
    val endpointConfig: EndpointConfig,

    @ManyToOne
    @JoinColumn(name = "role_id", referencedColumnName = "id")
    val role: Role
)
