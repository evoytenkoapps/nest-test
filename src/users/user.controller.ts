import { Controller, Get } from '@nestjs/common';
import { UserRepository } from './user-repository';

@Controller()
export class UserController {
  constructor(private userRepository: UserRepository) {}

  @Get('users')
  async getUsers(): Promise<any> {
    const users = await this.userRepository.getUsers();
    console.log('users: 22222122');
    return users;
  }
}
