package com.ha.helixauth.api.annotation

@Retention(AnnotationRetention.RUNTIME)
@Target(AnnotationTarget.FUNCTION)
annotation class HelixAuthorize(val role: String)
