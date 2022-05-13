import { Injectable, Logger } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';

@Injectable()
export class CronjobService {
  private readonly logger = new Logger(CronjobService.name);

  // @Cron('45 * * * * *')
  // handleCron() {
  //   // this.logger.debug('Called when the current second is 45');
  // }
}
