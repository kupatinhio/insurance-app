import { Injectable } from '@nestjs/common';
import { CreatePacketDto } from './dto/create-packet.dto';
import { UpdatePacketDto } from './dto/update-packet.dto';

@Injectable()
export class PacketsService {
  create(createPacketDto: CreatePacketDto) {
    return 'This action adds a new packet';
  }

  findAll() {
    return `This action returns all packets`;
  }

  findOne(id: number) {
    return `This action returns a #${id} packet`;
  }

  update(id: number, updatePacketDto: UpdatePacketDto) {
    return `This action updates a #${id} packet`;
  }

  remove(id: number) {
    return `This action removes a #${id} packet`;
  }
}
