import { Injectable } from '@nestjs/common';
import { DbService } from '../services/db.service';

@Injectable()
export class UserRepository {
  constructor(private dbConnection: DbService) {}
  getUsers() {
    const query = 'SELECT * FROM USERS';

    return this.dbConnection.sendQuery(query, null);
  }
}
