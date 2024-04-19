package com.ha.helixauth.api.utils.redis

import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration
import org.springframework.data.redis.connection.Message
import org.springframework.data.redis.connection.MessageListener
import org.springframework.data.redis.connection.lettuce.LettuceConnectionFactory
import org.springframework.data.redis.core.RedisTemplate
import org.springframework.data.redis.listener.ChannelTopic
import org.springframework.data.redis.listener.RedisMessageListenerContainer
import org.springframework.data.redis.listener.adapter.MessageListenerAdapter
import org.springframework.stereotype.Service

@Configuration
class MessagingConfig {

    @Bean
    fun messageListener() = MessageListenerAdapter(MyMessageListener())

    @Bean
    fun redisContainer(connectionFactory: LettuceConnectionFactory): RedisMessageListenerContainer {
        val container = RedisMessageListenerContainer()
        container.setConnectionFactory(connectionFactory)
        container.addMessageListener(messageListener(), topic())
        return container
    }

    @Bean
    fun topic() = ChannelTopic("news")

    class MyMessageListener : MessageListener {
        override fun onMessage(message: Message, pattern: ByteArray?) {
            println("Message received: $message")
        }
    }
}

@Service
class MessageService(val redisTemplate: RedisTemplate<String, Any>) {
    fun publishMessage() {
        redisTemplate.convertAndSend("news", "Hello from Redis!")
    }
}
