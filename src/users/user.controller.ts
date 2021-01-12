import { Controller, Get, Param } from '@nestjs/common';
import { UserDao } from './user.dao';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Get('/all')
  async getUsers(): Promise<any> {
    console.log('getUsers');
    const users = await this.userService.getUsers();

    return users;
  }

  @Get('/:id')
  async getUser(@Param('id') id: number): Promise<any> {
    return await this.userService.getUser(id);
  }
}
