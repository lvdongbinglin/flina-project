import { Injectable, BadRequestException, Logger } from '@nestjs/common';
import { LoginDto } from '../dto/login.dto';
import { Repository } from 'typeorm';

import { InjectRepository } from '@nestjs/typeorm';
import { Login } from '../entity/login.entity';
import { LoginRepository } from 'src/repository/login.repositroy';
import { isNull, getRandomCode } from 'src/constant/function';
import { BehaviorSubject, Subject } from 'rxjs';
import { randomUUID } from 'crypto';
import { generateUUID } from '../constant/function';


@Injectable()
export class LoginService {

  async getLoginName(email: string, code: number) {
    let resultLoginUser: Login;
    await this.repo.findOneByEmail(email).then(
      loginUser => {
        if (isNull(loginUser)) {
          throw new BadRequestException(`邮箱${email}未找到注册用户，请注册登陆用户`)
        }
        resultLoginUser = loginUser;
      }
    );
    Logger.log(JSON.stringify(resultLoginUser))
    return resultLoginUser.username;
  }

  constructor(
    @InjectRepository(Login)
    private readonly repo: LoginRepository
  ) { }

  async login(signinLoginDto: LoginDto) {
    let result;
    await this.repo.findOneByName(signinLoginDto.username).then(loginUser => {
      if (loginUser.password !== signinLoginDto.password) {
        result = loginUser;
      }
    })

    return result;
  }

  async saveCode(email: string, code: number) {
    await this.repo.findOneByEmail(email).then(loginUser => {
      if (isNull(loginUser)) {
        loginUser = new Login();
        loginUser.email = email;
        loginUser.username = generateUUID()
        loginUser.password = generateUUID()
      }
      loginUser.code = code;
      loginUser.up_time = new Date();
      this.repo.save(loginUser)
    })
  }


  async logup(signupLoginDto: LoginDto) {
    await this.repo.findOneByEmail(signupLoginDto.email).then(loginUser => {
      if (isNull(loginUser)) {
        loginUser = new Login();
        loginUser.email = signupLoginDto.email;
      }
      if (loginUser.code !== signupLoginDto.code) {
        throw new BadRequestException("无效的验证码：" + signupLoginDto.code)
      }
      loginUser.username = signupLoginDto.username;
      loginUser.password = loginUser.password;
      loginUser.code = -1;
      loginUser.up_time = new Date();
      this.repo.save(loginUser)
    })
  }

  getCode() {

  }

  create(createLoginDto: LoginDto) {
    return 'This action adds a new login';
  }

  async findAll() {
    return await this.repo.findAll();
  }

  findOne(id: number) {
    return `This action returns a #${id} login`;
  }

  async findOneByName(usename: string) {
    return await this.repo.findOneByName(usename)
  }

  update(id: number, updateLoginDto: LoginDto) {
    return `This action updates a #${id} login`;
  }

  remove(id: number) {
    return `This action removes a #${id} login`;
  }
}
