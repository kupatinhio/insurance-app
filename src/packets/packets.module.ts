import { Module } from '@nestjs/common';
import { PacketsService } from './packets.service';
import { PacketsController } from './packets.controller';
import { AutoInsurancePolicyEntity } from './entities/auto-insurance.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HealthInsurancePolicy } from './entities/health-insurance.entity';
import { BusinessInsurancePolicyEntity } from './entities/business-insurance.entity';

@Module({
  imports: [TypeOrmModule.forFeature([BusinessInsurancePolicyEntity,AutoInsurancePolicyEntity, HealthInsurancePolicy])],
  controllers: [PacketsController],
  providers: [PacketsService]
})
export class PacketsModule {}
