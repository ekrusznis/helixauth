package com.ha.helixauth.api.company.model.dto

data class SubscriptionDto(
    val paymentToken: String, // Token from Stripe/PayPal
    val transactionId: String // Transaction identifier from payment processor
)
