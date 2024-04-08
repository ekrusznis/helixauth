package com.ha.helixauth.api.dashboard.controller

import com.ha.helixauth.api.dashboard.service.DashboardService
import org.springframework.security.access.prepost.PreAuthorize
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

@RestController
@RequestMapping("/api/dashboard")
class DashboardController(private val dashboardService: DashboardService) {

    @GetMapping
    @PreAuthorize("isAuthenticated()")
    fun getDashboardData(): Any {
        return dashboardService.getDashboardData()
    }

}