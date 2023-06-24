import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe, Query } from '@nestjs/common';
import { PacketsService } from './packets.service';
import { CreateAutoDto, createBusinessDto } from './dto/create-packet.dto';
import { createHealthyDto } from './dto/create-packet.dto';
import { HealthInsurancePolicy } from './entities/health-insurance.entity';


@Controller('packets')
export class PacketsController {
  constructor(private readonly packetsService: PacketsService) { }

  @Post()
  create(@Body() createAutoDto: CreateAutoDto) {
    return this.packetsService.create(createAutoDto);
  }

  @Get(`/:id`)
  async findAuto(@Param('id', ParseIntPipe) id: number) {
    const auto = await this.packetsService.findAuto(id)
    return auto
  }
  @Get()
  findAllAuto(@Param('policyNumber') policyNumber: number) {
    return this.packetsService.findAllAuto(policyNumber)
  }

  @Delete('/:id')
  removeAuto(@Param('id', ParseIntPipe) id: number) {
    return this.packetsService.remove(id);
  }



  @Post('/health')
  createHealth(@Body() createHealthyDto: createHealthyDto) {
    return this.packetsService.createHealth(createHealthyDto)
  }

  @Get('/:id')
  async findPerson(@Param('id', ParseIntPipe) id: number) {
    const person = await this.packetsService.findPerson(id)
    return person
  }

  @Get()
  findAllPerson(@Param('policyNumber') policyNumber: number) {
    return this.packetsService.findAllPerson(policyNumber)
  }

  @Delete('/:id')
  removePerson(@Param('id', ParseIntPipe) id: number) {
    return this.packetsService.removeP(id);
  }


  @Post('/business')
  createBusiness(@Body() createBusinessDto: createBusinessDto) {
    return this.packetsService.createBusiness(createBusinessDto)
  }

  @Get(':/id')
  async findBusiness(@Param('id', ParseIntPipe) id: number) {
    const business = await this.packetsService.findBusiness(id)
    return business
  }

  @Get()
  findAllBusiness(@Param('policyNumber') policyNumber: number) {
    return this.packetsService.findAllBusiness(policyNumber)
  }

  @Delete('/:id')
  removeBusiness(@Param('id', ParseIntPipe) id: number) {
    return this.packetsService.removeB(id);
  }


}
