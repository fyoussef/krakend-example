import { Module } from '@nestjs/common';
import { TimeController } from './time.controller';

@Module({
  imports: [],
  controllers: [TimeController],
  providers: [],
})
export class TimeModule {}
