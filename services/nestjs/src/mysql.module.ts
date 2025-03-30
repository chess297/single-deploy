import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user.entity';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: () => {
        return {
          type: 'mysql',
          host: 'mysql',
          port: 3306,
          username: 'root',
          password: 'single_deploy',
          database: 'single_deploy',
          entities: [User],
          synchronize: true,
        };
      },
    }),
  ],
})
export class MysqlModule {}
