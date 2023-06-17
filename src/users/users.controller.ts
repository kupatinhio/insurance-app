import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe, Query } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  create(@Body() body: CreateUserDto) {
    return this.usersService.create(body);
  }





  @Get('/:id')
  async findUser(@Param('id', ParseIntPipe) id:number) {
    const user = await this.usersService.findOne(id)
    return user
  }
  
  @Get()
  findAllUsers(@Query('email') email:string){
    return this.usersService.findUsers(email)
  }
  @Post()
 findUsersByAdd(@Query(`address`) address:string){
  return this.usersService.findByAddress(address)

}

  @Delete('/:id')
  removeUser(@Param('id', ParseIntPipe) id:number){
    return this.usersService.remove(id);
  }

 
}

