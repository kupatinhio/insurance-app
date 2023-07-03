import { Body, Injectable } from '@nestjs/common';
import {
  CreateAutoDto
} from './dto/create-packet.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { InsuranceEntity } from './entities/insurance.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PacketsService {
  constructor(
    @InjectRepository(InsuranceEntity)
    private repository: Repository<InsuranceEntity>,
  ) {}

  create(@Body() body: CreateAutoDto) {
    const autoins = this.repository.create(body);
    return this.repository.save(autoins);
  }

  findAuto(id: number) {
    return this.repository.findBy({ id });
  }

  findAllAuto(policyNumber: number) {
    return this.repository.find({ where: { policyNumber } });
  }

  async remove(id: number) {
    const auto = await this.findAuto(id);
    return this.repository.remove(auto);
  }

  findPerson(id: number) {
    return this.repository.findBy({ id });
  }

  findAllPerson(policyNumber: number) {
    return this.repository.find({ where: { policyNumber } });
  }

  async removeP(id: number) {
    const person = await this.findPerson(id);
    return this.repository.remove(person);
  }

}
