import { Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import {
  ClientProxyFactory,
  Transport,
  ClientProxy,
} from '@nestjs/microservices';

@Injectable()
export class AppService {
  private client: ClientProxy;

  constructor() {
    this.client = ClientProxyFactory.create({
      transport: Transport.REDIS,
      options: {
        url: 'redis://localhost:6379',
      },
    });
  }

  accumulate(data: number[]): Observable<number> {
    return this.client.send<number, number[]>('add', data);
  }
}
