import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PacketsService } from './packets.service';
import { CreatePacketDto } from './dto/create-packet.dto';
import { UpdatePacketDto } from './dto/update-packet.dto';

@Controller('packets')
export class PacketsController {
  constructor(private readonly packetsService: PacketsService) {}

  @Post()
  create(@Body() createPacketDto: CreatePacketDto) {
    return this.packetsService.create(createPacketDto);
  }

  @Get()
  findAll() {
    return this.packetsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.packetsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePacketDto: UpdatePacketDto) {
    return this.packetsService.update(+id, updatePacketDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.packetsService.remove(+id);
  }
}
