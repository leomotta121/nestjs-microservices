import { Controller, Post, Body, Logger } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  private logger = new Logger();

  constructor(private readonly appService: AppService) {}

  @Post('add')
  add(@Body('data') data: number[]) {
    this.logger.log('Getting number from TCP client ' + data.toString());

    return this.appService.accumulate(data);
  }
}
