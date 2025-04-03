import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserSchema } from './user.schema';
import { ConfigModule, ConfigService } from '@nestjs/config';
import configuration from './config';
import { MysqlModule } from './data/mysql.module';
import { RedisCacheModule } from './data/redis.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configuration],
      isGlobal: true,
    }),
    MysqlModule,
    RedisCacheModule,
    TypeOrmModule.forFeature([UserSchema]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private configService: ConfigService) {
    console.log('configService', this.configService.get('MYSQL_PASSWORD'));
  }
}
