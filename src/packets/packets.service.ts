import { Body, Injectable, Param } from '@nestjs/common';
import { CreateAutoDto, createHealthyDto } from './dto/create-packet.dto';

import { InjectRepository } from '@nestjs/typeorm';
import { AutoInsurancePolicyEntity} from './entities/auto-insurance.entity';
import { Repository } from 'typeorm';
import { HealthInsurancePolicy } from './entities/health-insurance.entity';

@Injectable()
export class PacketsService {
  constructor(@InjectRepository(AutoInsurancePolicyEntity) private autorepo: Repository<AutoInsurancePolicyEntity>,
              @InjectRepository(HealthInsurancePolicy) private healthrepo: Repository<HealthInsurancePolicy> ) {}


  create(@Body() body: CreateAutoDto) {
    const autoins = this.autorepo.create(body);
    return this.autorepo.save(autoins)
  }

  createHealth(@Body() body: createHealthyDto) {
    const health = this.healthrepo.create(body);
    return this.healthrepo.save(health)
  }

  findAuto (id: number) {
    return this.autorepo.findBy({id})
  }

  findAllAuto(policyNumber: number) {
    return this.autorepo.find({where:{policyNumber}})
  }

}
