import { Controller, Post, Body } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('create-user')
  async register(@Body('name') name: string, @Body('password') password: string) {
    return this.userService.createUser(name, password);
  }

  @Post('authenticate')
  async authenticate(@Body('name') name: string, @Body('password') password: string) {
    return this.userService.validateUser(name, password);
  }
}
