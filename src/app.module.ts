import { Module } from '@nestjs/common';
import { DbService } from './services/db.service';
import { UserController } from './users/user.controller';
import { UserRepository } from './users/user-repository';

@Module({
  imports: [],
  controllers: [UserController],
  providers: [DbService, UserRepository],
})
export class AppModule {}
