import { Module } from '@nestjs/common';
import { PacketsService } from './packets.service';
import { PacketsController } from './packets.controller';
import { Package } from './entities/auto-insurance.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HealthInsurancePolicy } from './entities/health-insurance.entity';
import { BusinessInsurancePolicyEntity } from './entities/business-insurance.entity';

@Module({
<<<<<<< HEAD
  imports: [TypeOrmModule.forFeature([BusinessInsurancePolicyEntity,AutoInsurancePolicyEntity, HealthInsurancePolicy])],
=======
  imports: [TypeOrmModule.forFeature([Package, HealthInsurancePolicy])],
>>>>>>> f2813c1 (add purchese)
  controllers: [PacketsController],
  providers: [PacketsService]
})
export class PacketsModule {}
