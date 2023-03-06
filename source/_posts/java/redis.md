---
title: Redis
date: 2023-03-07 00:23:01
categories:
- 代码收藏
- Java
---

## Redis清理数据

```java
package test;

import org.springside.modules.nosql.redis.JedisTemplate;
import org.springside.modules.nosql.redis.pool.ConnectionInfo;
import org.springside.modules.nosql.redis.pool.JedisDirectPool;
import org.springside.modules.nosql.redis.pool.JedisPool;
import redis.clients.jedis.HostAndPort;
import redis.clients.jedis.JedisPoolConfig;

import java.io.Serializable;
import java.util.Collection;

import static org.springside.modules.nosql.redis.JedisTemplate.JedisAction;

public class JedisTest {
    public static void main(String[] args) {

        String poolName = "mypool"; //
        HostAndPort address = new HostAndPort("127.0.0.1", 6379);
        ConnectionInfo connectionInfo = new ConnectionInfo();
        connectionInfo.setPassword("1");
        JedisPoolConfig config = new JedisPoolConfig();
        JedisPool jedisPool = new JedisDirectPool(poolName, address, connectionInfo, config);
        JedisTemplate jedisTemplate = new JedisTemplate(jedisPool);

        JedisAction action  = (JedisAction<Serializable>) jedis -> {
            Collection<String> keys = jedis.keys("*");
            System.out.println(keys);
            for(String key2 : keys) {
                jedisTemplate.del(key2);
            }
            System.out.println("end action");
            return null;
        };
        Object value = action.action(jedisTemplate.getJedisPool().getResource());
        System.out.println(value);
        System.out.println("end main");
        jedisPool.close();
//
//        jedisTemplate.del(key);
//        System.out.println("删除【" + key + "】成功！");
    }

}
```
