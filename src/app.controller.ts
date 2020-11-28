import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    const text = this.appService.getHello();
    console.log('text: ', text);
    return 'asdasd';
  }
}
