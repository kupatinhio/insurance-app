import { Body, Injectable, Param } from '@nestjs/common';
<<<<<<< HEAD
import { CreateAutoDto, createBusinessDto, createHealthyDto } from './dto/create-packet.dto';
=======
import { CreateAutoDto, createHealthyDto } from './dto/create-packet.dto';
>>>>>>> f2813c1 (add purchese)
import { InjectRepository } from '@nestjs/typeorm';
import { Package} from './entities/auto-insurance.entity';
import { Repository } from 'typeorm';
import { HealthInsurancePolicy } from './entities/health-insurance.entity';
import { BusinessInsurancePolicyEntity } from './entities/business-insurance.entity';

@Injectable()
export class PacketsService {
  constructor(@InjectRepository(Package) private autorepo: Repository<Package>,
              @InjectRepository(HealthInsurancePolicy) private healthrepo: Repository<HealthInsurancePolicy> ) {}


  create(@Body() body: CreateAutoDto) {
    const autoins = this.autorepo.create(body);
    return this.autorepo.save(autoins)
  }

  createHealth(@Body() body: createHealthyDto) {
    const health = this.healthrepo.create(body);
    return this.healthrepo.save(health)
  }

  createBusiness(@Body() body: createBusinessDto) {
    const business = this.businessrepo.create(body);
    return this.businessrepo.save(business)
  }

  findAuto (id: number) {
    return this.autorepo.findBy({id})
  }

  findAllAuto(policyNumber: number) {
    return this.autorepo.find({where:{policyNumber}})
  }

  async remove(id: number) {
    const auto = await this.findAuto(id)
    return this.autorepo.remove(auto)
  }

  findPerson (id: number) {
    return this.healthrepo.findBy({id})
  }

  findAllPerson(policyNumber: number) {
    return this.healthrepo.find({where:{policyNumber}})
  }

  async removeP(id: number) {
    const person = await this.findPerson(id)
    return this.healthrepo.remove(person)
  }

  findBusiness (id: number) {
    return this.businessrepo.findBy({id})
  }

  findAllBusiness(policyNumber: number) {
    return this.businessrepo.find({where:{policyNumber}})
  }

  async removeB(id: number) {
    const business = await this.findBusiness(id)
    return this.businessrepo.remove(business)
  }


}
