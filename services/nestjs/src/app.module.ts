import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user.entity';
import { UserSchema } from './user.schema';
import { CacheModule } from '@nestjs/cache-manager';
import { RedisCacheModule } from './redis.module';

@Module({
  imports: [
    CacheModule.register({}),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'single_deploy',
      database: 'single_deploy',
      entities: [User],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([UserSchema]),
    RedisCacheModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
