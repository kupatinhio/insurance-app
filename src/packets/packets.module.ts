import { Module } from '@nestjs/common';
import { PacketsService } from './packets.service';
import { PacketsController } from './packets.controller';

@Module({
  controllers: [PacketsController],
  providers: [PacketsService]
})
export class PacketsModule {}
