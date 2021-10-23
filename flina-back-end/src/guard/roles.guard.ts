import { Injectable, CanActivate, ExecutionContext, Logger, ArgumentsHost } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { AuthGuard } from '@nestjs/passport';
import jwtDecode from 'jwt-decode';
import { Observable } from 'rxjs';
import { TokenService } from 'src/service/token.service';
import { LoginService } from 'src/service/login.service';
import { Login } from 'src/entity/login.entity';

@Injectable()
export class RolesGuard implements CanActivate {

  constructor(
    private reflector: Reflector,
    private loginService: LoginService
  ) { }

  async canActivate(context: ExecutionContext) {
    const roles = this.reflector.get<string[]>('roles', context.getHandler());
    const level = this.reflector.get<number>('level', context.getHandler());
    if (!roles && level) {
      Logger.log(`授权所有用户成功`)
      return true;
    }
    const request = context.switchToHttp().getRequest();
    const authorization: string = request.header("Authorization");
    const tokeStartIndexPosition = 7;
    const token = authorization.substring(tokeStartIndexPosition);
    const decoded = JSON.parse(JSON.stringify(jwtDecode(token)))
    Logger.log(JSON.stringify(decoded));
    const user = await this.loginService.findOneByName(decoded["username"])

    if (!user || !roles.includes(user.role.name) || level !== user.role.level) {
      Logger.log(`授权用户${user.username}失败`)
      Logger.log(JSON.stringify(user))
      return false;
    }
    Logger.log(`授权用户${user.username}成功`)
    return true;

  }

}