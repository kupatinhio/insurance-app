import { Module } from '@nestjs/common';
import { PurchaseService } from './purchase.service';
import { PurchaseController } from './purchase.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from 'src/users/entities/user.entity';
import { InsuranceEntity } from 'src/packages/entities/insurance.entity';

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity, InsuranceEntity])],
  controllers: [PurchaseController],
  providers: [PurchaseService]
})
export class PurchaseModule {}
