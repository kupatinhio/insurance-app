import { Controller, Get, Post, Body, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { PacketsService } from './packets.service';
import { CreateAutoDto } from './dto/create-packet.dto';


@Controller('packages')
export class PacketsController {
  constructor(private readonly service: PacketsService) { }

  @Post()
  create(@Body() createAutoDto: CreateAutoDto) {
    return this.service.create(createAutoDto);
  }

  @Get(`/:id`)
  async findAuto(@Param('id', ParseIntPipe) id: number) {
    const auto = await this.service.findAuto(id)
    return auto
  }
  @Get()
  findAllAuto(@Param('policyNumber') policyNumber: number) {
    return this.service.findAllAuto(policyNumber)
  }

  @Delete('/:id')
  removeAuto(@Param('id', ParseIntPipe) id: number) {
    return this.service.remove(id);
  }

  @Get('/:id')
  async findPerson(@Param('id', ParseIntPipe) id: number) {
    const person = await this.service.findPerson(id)
    return person
  }

  @Get()
  findAllPerson(@Param('policyNumber') policyNumber: number) {
    return this.service.findAllPerson(policyNumber)
  }

  @Delete('/:id')
  removePerson(@Param('id', ParseIntPipe) id: number) {
    return this.service.removeP(id);
  }

}
