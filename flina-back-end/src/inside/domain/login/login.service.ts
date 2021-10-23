import { Injectable } from '@nestjs/common';
import { CreateLoginDto } from './login.dto';
import { Repository } from 'typeorm';

import { InjectRepository } from '@nestjs/typeorm';
import { Login } from '../../../entity/login.entity';



@Injectable()
export class LoginService {

  constructor(
    @InjectRepository(Login)
    private readonly repo: Repository<Login>
  ) { }

  login(createLoginDto: CreateLoginDto) {

  }

  logup(createLoginDto: CreateLoginDto) {

  }

  getCode() {

  }

  create(createLoginDto: CreateLoginDto) {
    return 'This action adds a new login';
  }

  findAll() {
    return `This action returns all login`;
  }

  findOne(id: number) {
    return `This action returns a #${id} login`;
  }

  update(id: number, updateLoginDto: CreateLoginDto) {
    return `This action updates a #${id} login`;
  }

  remove(id: number) {
    return `This action removes a #${id} login`;
  }
}
