import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DbService } from './services/db.service';
import { UserRepositoryService } from './services/user-repository.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, DbService, UserRepositoryService],
})
export class AppModule {}
