package com.ha.helixauth.api.utils

import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration
import org.springframework.security.config.annotation.web.builders.HttpSecurity
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder
import org.springframework.security.crypto.password.PasswordEncoder
import org.springframework.security.web.SecurityFilterChain
import org.springframework.web.servlet.config.annotation.CorsRegistry
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer


@Configuration
@EnableWebSecurity
class WebSecurityConfig: WebMvcConfigurer {

    override fun addCorsMappings(registry: CorsRegistry) {
        registry.addMapping("/api/**")
            .allowedOrigins("http://localhost:3000") // Adjust the origin accordingly
            .allowedMethods("GET", "POST", "PUT", "DELETE", "OPTION")
            .allowedHeaders("*")
            .allowCredentials(true)
    }

    @Bean
    fun passwordEncoder(): PasswordEncoder = BCryptPasswordEncoder()

    @Bean
    fun filterChain(http: HttpSecurity): SecurityFilterChain {
        http
            .cors() // Enable CORS and use default CorsConfigurationSource
            .and()
            .csrf().disable()
            .authorizeRequests()
            .antMatchers("/api/**").permitAll()
            .anyRequest().authenticated()
            .and()
            .formLogin().disable()

        return http.build()
    }
}
