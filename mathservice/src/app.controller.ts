import { Controller, Logger } from '@nestjs/common';
import { AppService } from './app.service';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class AppController {
  private logger = new Logger('AppController');

  constructor(private readonly appService: AppService) {}

  @MessagePattern('add')
  add(data: number[]): number {
    this.logger.log('Adding ' + data.toString());

    return this.appService.accumulate(data);
  }
}
