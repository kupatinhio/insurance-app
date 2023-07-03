import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { PacketsModule } from './packages/packets.module';
import { CompaniesModule } from './companies/companies.module';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';
import { PurchaseModule } from './purchase/purchase.module';
@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '1234',
    database: 'insuranceapp',
    entities: [__dirname + '/**/entity/*.entity{.ts,.js}'],
    logging: true,
      autoLoadEntities: true,
    namingStrategy: new SnakeNamingStrategy(),
    synchronize: true
  }),UsersModule, PacketsModule, CompaniesModule, PurchaseModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
