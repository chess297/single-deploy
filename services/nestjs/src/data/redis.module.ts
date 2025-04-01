import { Module } from '@nestjs/common';
import { RedisModule } from '@nestjs-modules/ioredis';
import { getCacheConfig } from 'src/config';

@Module({
  imports: [
    RedisModule.forRootAsync({
      useFactory: () => {
        const cacheConfig = getCacheConfig();
        const url = `redis://${cacheConfig.username}:${cacheConfig.password}@${cacheConfig.host}:${cacheConfig.port}`;
        console.log('RedisModule url', url);
        return {
          url: url,
          type: 'single',
        };
      },
    }),
  ],
})
export class RedisCacheModule {}
