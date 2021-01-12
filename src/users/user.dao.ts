import { Inject, Injectable } from '@nestjs/common';

@Injectable()
export class UserDao {
  constructor(@Inject('DATABASE_CONNECTION') private connection: any) {}
  getUsers() {
    const query = 'SELECT * FROM USERS';

    return this.connection.any(query, null);
  }

  getUser(id: number) {
    const query = 'SELECT FROM USERS WHERE user=$1';

    return this.connection.any(query, [id]);
  }
}
