import { Inject, Injectable } from '@nestjs/common';
import { UserDao } from './user.dao';

@Injectable()
export class UserService {
  constructor(private userDao: UserDao) {}

  getUsers() {
    return this.userDao.getUsers();
  }

  getUser(id: number) {
    return this.userDao.getUser(id);
  }
}
