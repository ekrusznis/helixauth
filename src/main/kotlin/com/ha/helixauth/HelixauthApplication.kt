package com.ha.helixauth

import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication
import org.springframework.cache.annotation.EnableCaching
import springfox.documentation.swagger2.annotations.EnableSwagger2

@SpringBootApplication
@EnableSwagger2
@EnableCaching
class HelixauthApplication

fun main(args: Array<String>) {
	runApplication<HelixauthApplication>(*args)
}
