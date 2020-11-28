import { Inject, Injectable } from '@nestjs/common';

@Injectable()
export class UserRepository {
  constructor(@Inject('DATABASE_CONNECTION') private connection: any) {}
  getUsers() {
    const query = 'SELECT * FROM USERS';

    return this.connection.any(query, null);
  }
}
