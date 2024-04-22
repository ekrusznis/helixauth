package com.ha.helixauth.api.utils.redis


//@Configuration
//class MessagingConfig {
//
//    @Bean
//    fun messageListener() = MessageListenerAdapter(MyMessageListener())
//
//    @Bean
//    fun redisContainer(connectionFactory: LettuceConnectionFactory): RedisMessageListenerContainer {
//        val container = RedisMessageListenerContainer()
//        container.setConnectionFactory(connectionFactory)
//        container.addMessageListener(messageListener(), topic())
//        return container
//    }
//
//    @Bean
//    fun topic() = ChannelTopic("news")
//
//    class MyMessageListener : MessageListener {
//        override fun onMessage(message: Message, pattern: ByteArray?) {
//            println("Message received: $message")
//        }
//    }
//}
//
//@Service
//class MessageService(val redisTemplate: RedisTemplate<String, Any>) {
//    fun publishMessage() {
//        redisTemplate.convertAndSend("news", "Hello from Redis!")
//    }
//}
