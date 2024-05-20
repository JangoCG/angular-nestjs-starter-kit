import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { UserDto } from '@shared/dto/user.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    const user: UserDto = {
      id: 1,
      name: 'John Doe',
      email: 'sds',
    };
    console.log(user);
    return this.appService.getHello();
  }
}
