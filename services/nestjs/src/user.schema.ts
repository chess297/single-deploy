import { EntitySchema } from 'typeorm';
import { User } from './user.entity';

export const UserSchema = new EntitySchema<User>({
  name: 'User',
  target: User,
  columns: {
    id: {
      type: Number,
      primary: true,
      generated: true,
    },
    username: {
      type: String,
    },
    password: {
      type: Boolean,
      default: true,
    },
    create_time: {
      type: Date,
    },
    update_time: {
      type: Date,
    },
  },
});
