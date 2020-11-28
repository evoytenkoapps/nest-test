import * as pgPromise from 'pg-promise';

export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: () => {
      console.log('create connection');
      return pgPromise()('postgres://postgres:Qwe12345@127.0.0.1:5432/gisdb');
    },
  },
];
