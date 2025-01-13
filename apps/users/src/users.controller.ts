import { Controller, Get } from '@nestjs/common';
import { randomUUID } from 'crypto';

@Controller('/users')
export class UsersController {
  @Get()
  execute() {
    return Array.from({ length: 10 }).map(() => ({
      name: randomUUID(),
    }));
  }
}
