import { Module } from '@nestjs/common';
import { UploadsController } from './uploads.controller';

@Module({
  // providers: [UploadsService],
  controllers: [UploadsController],
})
export class UploadsModule {}
