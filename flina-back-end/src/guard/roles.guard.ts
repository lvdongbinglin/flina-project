import { Injectable, CanActivate, ExecutionContext, Logger, UnauthorizedException } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { AuthGuard } from '@nestjs/passport';
import jwtDecode from 'jwt-decode';
import { Observable } from 'rxjs';
import { TokenService } from 'src/service/token.service';
import { LoginService } from 'src/service/login.service';


@Injectable()
export class RolesGuard implements CanActivate {

  constructor(
    private reflector: Reflector,
    private loginService: LoginService,
  ) { }

  async canActivate(context: ExecutionContext) {
    Logger.log(`开始鉴权`)
    const roles = this.reflector.get<string[]>('roles', context.getHandler());
    const level = this.reflector.get<number>('level', context.getHandler());
    if (!roles && !level) {
      Logger.log(`授权所有用户成功`)
      return true;
    } else {
      try {
        const request = context.switchToHttp().getRequest();
        const authorization: string = request.header("Authorization");
        const tokeStartIndexPosition = 7;
        const token = authorization.substring(tokeStartIndexPosition);
        const decoded = JSON.parse(JSON.stringify(jwtDecode(token)))
        const { username, exp } = decoded;
        const expMutil = 1000;
        const expTime = new Date(exp * expMutil).toLocaleString()
        Logger.log(JSON.stringify(decoded));
        Logger.log(`授权用户${username}, Token将于${expTime}过期`)
        if (exp * expMutil < new Date().getTime()) {
          Logger.log(`授权用户${username}失败, Token已于${expTime}过期，请重新登陆`)
          return false
        }
        const user = await this.loginService.findOneByName(username)
        Logger.log(JSON.stringify(user))
        if (!roles.includes(user.role.name) || level !== user.role.level) {
          Logger.log(`授权用户${username}失败`)
          Logger.log(JSON.stringify(user))
          return false;
        }

        Logger.log(`授权用户${user.username}成功`)
        return true;
      } catch (e) {
        throw new UnauthorizedException("授权用户失败")
      }

    }
  }

}