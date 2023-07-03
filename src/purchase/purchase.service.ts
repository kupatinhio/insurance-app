// purchase.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserEntity } from 'src/users/entities/user.entity';
import { InsuranceEntity } from 'src/packages/entities/insurance.entity';


@Injectable()
export class PurchaseService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
    @InjectRepository(InsuranceEntity)
    private readonly packageRepository: Repository<InsuranceEntity>,
  ) {}

  async purchasePackage(userId: number, packageId: number) {
    const user = await this.userRepository.findOne({where: {id:userId}});
    const packages = await this.packageRepository.findOne({where: {id: packageId}})
    
    user.packages.push(packages)
    await this.userRepository.save(user)

    return user
    
  }
}
