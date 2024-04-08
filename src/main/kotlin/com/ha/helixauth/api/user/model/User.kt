package com.ha.helixauth.api.user.model

import com.ha.helixauth.api.company.model.Company
import java.time.LocalDateTime
import javax.persistence.Column
import javax.persistence.Entity
import javax.persistence.GeneratedValue
import javax.persistence.GenerationType
import javax.persistence.Id
import javax.persistence.ManyToOne
import javax.persistence.Table

@Entity
@Table(name = "users")
class User(
    @Id @GeneratedValue(strategy = GenerationType.AUTO)
    val id: Long = 0,
    var username: String,
    var email: String,
    var password: String, // Ensure to use password encryption in production
    @Column(name = "first_name") var firstName: String,
    @Column(name = "last_name") var lastName: String,
    var avatar: String, // URL to the avatar image
    @ManyToOne
    var company: Company,
    @Column(name = "session_token") var sessionToken: String? = null,
    @Column(name = "session_token_expiry") var sessionTokenExpiry: LocalDateTime? = null

)
