import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { UserRepositoryService } from './services/user-repository.service';

@Controller()
export class AppController {
  constructor(private userRepository: UserRepositoryService) {}

  @Get()
  async getUsers(): Promise<any> {
    const users = await this.userRepository.getUsers();
    console.log('users: ');
    return users;
  }
}
