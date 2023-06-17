import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe, Query } from '@nestjs/common';
import { PacketsService } from './packets.service';
import { CreateAutoDto } from './dto/create-packet.dto';
import { createHealthyDto } from './dto/create-packet.dto';
import { HealthInsurancePolicy } from './entities/health-insurance.entity';


@Controller('packets')
export class PacketsController {
  constructor(private readonly packetsService: PacketsService) {}

  @Post()
  create(@Body() createAutoDto: CreateAutoDto) {
    return this.packetsService.create(createAutoDto);
  }

  @Get(`/:id`)
  async findAuto(@Param('id',ParseIntPipe) id: number){
    const auto = await this.packetsService.findAuto(id)
    return auto
  }
  @Get()
  findAllAuto (@Param('policyNumber') policyNumber: number ) {
    return this.packetsService.findAllAuto(policyNumber)
  }


  @Post('/health')
  createHealth(@Body() createHealthyDto: createHealthyDto) {
    return this.packetsService.createHealth(createHealthyDto)
  }
  



}
