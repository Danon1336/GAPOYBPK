import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import {LoginUserDto} from "./dto/login-user.dto";

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post("register")
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.Create(createUserDto);
  }

  @Post("login")
  login(@Body() loginUserDto : LoginUserDto) {
    return this.userService.Login(loginUserDto);
  }
}

