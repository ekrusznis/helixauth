package com.ha.helixauth.api.utils.redis


//TODO - rate limiting based on subscription

//@Service
//class RateLimiterService(val redisTemplate: RedisTemplate<String, Any>) {
//    fun isAllowed(userId: String): Boolean {
//        val key = "req:$userId"
//        val count = redisTemplate.opsForValue().increment(key, 1)
//        if (count == 1L) {  // First request
//            redisTemplate.expire(key, 1, TimeUnit.MINUTES)
//        }
//        return if (count != null) {
//            count <= 10
//        }else false
//    }
//}
