package com.ha.helixauth.api.annotation

import kotlin.annotation.AnnotationRetention.RUNTIME
import kotlin.annotation.AnnotationTarget.FUNCTION

@Retention(RUNTIME)
@Target(FUNCTION)
annotation class HelixAuthorize(val roles: Array<String>)
