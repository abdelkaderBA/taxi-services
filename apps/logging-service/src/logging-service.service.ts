import { Injectable } from '@nestjs/common';

@Injectable()
export class LoggingServiceService {
  getHello(): string {
    return 'Logging service';
  }
}
