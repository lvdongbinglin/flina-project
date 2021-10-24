import { Module } from "@nestjs/common";
import { APP_GUARD } from "@nestjs/core";
import { JwtModule, JwtService } from "@nestjs/jwt";
import { TypeOrmModule } from "@nestjs/typeorm";
import { DictionaryController } from "src/controller/dictionary.controller";
import { LoginController } from "src/controller/login.controller";
import { Dictionary } from "src/entity/dictionary.entity";
import { Login } from "src/entity/login.entity";
import { RolesGuard } from "src/guard/roles.guard";
import { DictionaryRepository } from "src/repository/dictionary.repository";
import { LoginRepository } from "src/repository/login.repositroy";
import { DictionaryService } from "src/service/dictionary.service";
import { EmailService } from "src/service/email.service";
import { JwtStrategy } from "src/service/jwt.strategy.service";
import { LoginService } from "src/service/login.service";
import { TokenService } from "src/service/token.service";
import { AppTokenModule } from "./app.token.module";


@Module({
  imports: [
    AppTokenModule,
    TypeOrmModule.forFeature([DictionaryRepository]),
    TypeOrmModule.forFeature([LoginRepository])
  ],
  controllers: [
    DictionaryController,
    LoginController
  ],
  providers: [
    DictionaryService,
    LoginService,
    EmailService,
    TokenService,
    {
      provide: APP_GUARD,
      useClass: RolesGuard,
    },
  ],
  exports: [TypeOrmModule]
})
export class AppOrmModule { }