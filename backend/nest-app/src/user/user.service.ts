import { HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { PrismaService } from 'src/prisma.service';
import { LoginUserDto } from './dto/login-user.dto';
import jwt from 'jsonwebtoken';
@Injectable()
export class UserService {

  constructor(private readonly prisma: PrismaService) {}

  async Create(createUserDto: CreateUserDto) {
    return this.prisma.users.create({
      data: {
        login: createUserDto.login,
        email: createUserDto.email,
        password: createUserDto.password
      }
    })
  }

  async Login(loginuserdto: LoginUserDto) {
    const findUser = await this.prisma.users.findUnique({
      where: {login: loginuserdto.login}
    })

    if (!findUser) {
      throw new NotFoundException('Пользователь не найден')
    }

    if (findUser.password != loginuserdto.password) {
      throw new NotFoundException('Неверный логин или пароль')
    }

    const JWT_SECRET = 'your-secret-key';
    const TOKEN_LIFETIME = 3600; // 3600 секунд = 1 час

    const token = jwt.sign(JWT_SECRET, { expiresIn: TOKEN_LIFETIME })

    throw new HttpException({'token': token}, HttpStatus.OK)
  }

  async FindOne(id: number) {
    return `This action returns a #${id} user`;
  }


  async Remove(id: number) {
    return `This action removes a #${id} user`;
  }
}