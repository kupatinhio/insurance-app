import { Module } from '@nestjs/common';
import { PacketsService } from './packets.service';
import { PacketsController } from './packets.controller';
import { AutoInsurancePolicyEntity } from './entities/auto-insurance.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HealthInsurancePolicy } from './entities/health-insurance.entity';

@Module({
  imports: [TypeOrmModule.forFeature([AutoInsurancePolicyEntity, HealthInsurancePolicy])],
  controllers: [PacketsController],
  providers: [PacketsService]
})
export class PacketsModule {}
