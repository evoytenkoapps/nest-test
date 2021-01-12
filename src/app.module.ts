import { Module } from '@nestjs/common';
import { UserController } from './users/user.controller';
import { UserDao } from './users/user.dao';
import { DatabaseModule } from './db/database.module';
import { UserService } from './users/user.service';

@Module({
  imports: [DatabaseModule],
  controllers: [UserController],
  providers: [UserDao, UserService],
})
export class AppModule {}
