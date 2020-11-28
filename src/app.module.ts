import { Module } from '@nestjs/common';
import { UserController } from './users/user.controller';
import { UserRepository } from './users/user-repository';
import { DatabaseModule } from './db/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [UserController],
  providers: [UserRepository],
})
export class AppModule {}
