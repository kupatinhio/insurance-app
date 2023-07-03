import { Module } from '@nestjs/common';
import { PacketsService } from './packets.service';
import { PacketsController } from './packets.controller';
import { InsuranceEntity } from './entities/insurance.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([InsuranceEntity])],
  controllers: [PacketsController],
  providers: [PacketsService]
})
export class PacketsModule {}
