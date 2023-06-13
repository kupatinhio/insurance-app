import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { PacketsModule } from './packets/packets.module';
import { CompaniesModule } from './companies/companies.module';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';
@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'mariadb',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '123123',
    database: 'insuranceapp',
    entities: [__dirname+ '/**/entities/*.entity.{ts,js}'],
    namingStrategy: new SnakeNamingStrategy(),
    synchronize: true
  }),UsersModule, PacketsModule, CompaniesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
