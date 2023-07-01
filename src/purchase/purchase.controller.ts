// purchase.controller.ts
import { Controller, Post, Param } from '@nestjs/common';
import { PurchaseService } from './purchase.service';

@Controller('purchase')
export class PurchaseController {
  constructor(private readonly purchaseService: PurchaseService) {}

  @Post(':userId/:packageId')
  async purchasePackage(@Param('userId') userId: number, @Param('packageId') packageId: number) {
    const user = await this.purchaseService.purchasePackage(userId, packageId);
    return { message: 'Package purchased successfully', user };
  }
}
