package com.ha.helixauth.api.utils.redis


//@Configuration
//class RedisConfig {
//
//    @Bean
//    fun redisConnectionFactory() = LettuceConnectionFactory()
//
//    @Bean
//    fun redisTemplate(connectionFactory: LettuceConnectionFactory): RedisTemplate<String, Any> {
//        val template = RedisTemplate<String, Any>()
//        template.setConnectionFactory(connectionFactory)
//        template.keySerializer = StringRedisSerializer()
//        template.valueSerializer = GenericToStringSerializer(Any::class.java)
//        return template
//    }
//}
