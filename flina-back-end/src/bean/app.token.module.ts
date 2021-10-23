import { Module } from "@nestjs/common";
import { JwtModule, JwtService } from "@nestjs/jwt";
import { PassportModule } from "@nestjs/passport";
import { tokenSecret } from "src/constant/secret.const";
import { JwtStrategy } from "src/service/jwt.strategy.service";
import { TokenService } from "src/service/token.service";


@Module({
  imports: [
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.register({
      //生成token的key
      secret: tokenSecret.key,
      // signOption可以在JwtModule设定
      // 或是在genToken时候设定
      signOptions: {
        //token的有效时长
        expiresIn: '1h',
      },
    }),
  ],
  providers: [
    TokenService,
    JwtStrategy,
  ],
  exports: [TokenService, JwtStrategy, JwtModule],
})
export class AppTokenModule {

}