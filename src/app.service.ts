import { Injectable } from '@nestjs/common';
import { UserRepositoryService } from './services/user-repository.service';

@Injectable()
export class AppService {
  constructor(private userRepository: UserRepositoryService) {}
  getHello(): string {
    return 'Hello World!';
  }
}
