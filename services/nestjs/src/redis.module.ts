import { Module } from '@nestjs/common';
import { RedisModule } from '@nestjs-modules/ioredis';

@Module({
  imports: [
    RedisModule.forRoot({
      options: {
        host: 'redis', // Redis 服务器地址
        port: 6379, // Redis 端口
        // password: 'single_deploy', // 如果有设置密码的话
        db: 0, // 如果你需要使用特定的数据库的话
      },
      type: 'single',
    }),
  ],
})
export class RedisCacheModule {}
