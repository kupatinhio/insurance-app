import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Repository } from 'typeorm/repository/Repository';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(@InjectRepository(UserEntity) private repo: Repository<UserEntity>,) {}

  create(email: string, password: string) {
    const user = this.repo.create({email,password});
    return this.repo.save(user)
  }
  

  findOne(id: number) {
    return this.repo.findOneBy({id})
  }
}
