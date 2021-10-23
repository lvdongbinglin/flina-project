
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { LoginDto } from 'src/dto/login.dto';


@Injectable()
export class TokenService {
  constructor(
    private readonly jwtService: JwtService,

  ) { }

  async genToken(user: LoginDto) {
    const payload = { username: user.username, password: user.password };
    delete user.password
    return this.jwtService.sign(payload)
  }


}