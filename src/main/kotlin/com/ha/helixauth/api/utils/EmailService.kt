package com.ha.helixauth.api.utils

import org.springframework.stereotype.Service

import org.springframework.mail.javamail.JavaMailSender
import org.springframework.mail.SimpleMailMessage
import org.thymeleaf.TemplateEngine
import org.thymeleaf.context.Context

@Service
class EmailService(
    private val mailSender: JavaMailSender,
    private val templateEngine: TemplateEngine
) {

    fun sendEmail(to: String, templateName: String, variables: Map<String, Any>?, subject: String) {
        val context = Context()
        variables?.forEach { (key, value) -> context.setVariable(key, value) }

        val content = templateEngine.process(templateName, context)

        val message = SimpleMailMessage()
        message.setTo(to)
        message.setSubject(subject)
        message.setText(content)
        mailSender.send(message)
    }
}
