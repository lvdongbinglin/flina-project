import { Module } from '@nestjs/common';
import { LoginService } from './login.service';
import { LoginController } from './login.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Login } from 'src/entity/login.entity';
import { EmailService } from 'src/inside/base/email.service';


@Module({
  imports: [
    TypeOrmModule.forFeature([Login])
  ],
  controllers: [LoginController],
  providers: [LoginService, EmailService],

})
export class LoginModule { }
