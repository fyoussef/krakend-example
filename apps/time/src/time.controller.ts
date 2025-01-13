import { Controller, Get } from '@nestjs/common';

@Controller('/time')
export class TimeController {
  @Get()
  exeucte() {
    return {
      time: new Date(),
    };
  }
}
