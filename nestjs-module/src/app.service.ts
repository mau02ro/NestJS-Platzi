import { Injectable, Inject } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AppService {
  constructor(
    // @Inject('API_KEY') private apiKey: string, // @Inject('TASKS') private tasks: any[],
    private configService: ConfigService,
  ) {}

  getHello(): string {
    // console.log(this.tasks);
    return `${this.configService.get('API_KEY')} Hello World!`;
  }
}
