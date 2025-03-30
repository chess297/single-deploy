import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Repository } from 'typeorm';
import Redis from 'ioredis';
import { InjectRedis } from '@nestjs-modules/ioredis';

@Injectable()
export class AppService {
  constructor(
    @InjectRedis() private readonly redis: Redis,
    @InjectRepository(User) private usersRepository: Repository<User>,
  ) {}
  getHello(): string {
    const user = new User();
    const username = randomString();
    const password = randomString(20);
    user.username = username;
    user.password = password;
    this.usersRepository
      .insert(user)
      .then(() => {
        console.log('MySql 创建用户成功');
      })
      .catch((err) => {
        console.log('MySql 创建用户失败', err);
      });

    this.redis
      .set(username, password)
      .then(() => {
        console.log('Redis 创建用户成功');
      })
      .catch((err) => {
        console.log('Redis 创建用户失败', err);
      });

    return 'Hello World!';
  }
}

function randomString(e = 10) {
  const t = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678';
  const a = t.length;
  let n = '';
  for (let i = 0; i < e; i++) n += t.charAt(Math.floor(Math.random() * a));
  return n;
}
