import { Injectable } from '@nestjs/common';
import { DbService } from './db.service';

@Injectable()
export class UserRepositoryService {
  constructor(private dbConnection: DbService) {}
  getUsers() {
    const query = 'SELECT * FROM USERS';

    return this.dbConnection.sendQuery(query, null);
  }
}
