import * as pgPromise from 'pg-promise';
import { Injectable } from '@nestjs/common';

@Injectable()
export class DbService {
  private readonly db;

  constructor() {
    const pgp = pgPromise();
    this.db = pgp('postgres://postgres:Qwe12345@127.0.0.1:5432/gisdb');
    console.log('init DbService');
  }

  sendQuery(query: string, data: any): Promise<any> {
    return this.db.any(query, data);
  }
}
