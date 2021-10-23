import { Module } from '@nestjs/common';
import { LoginService } from '../service/login.service';
import { LoginController } from '../controller/login.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Login } from 'src/entity/login.entity';
import { EmailService } from '../service/email.service';


@Module({
  imports: [
    TypeOrmModule.forFeature([Login])
  ],
  controllers: [LoginController],
  providers: [LoginService, EmailService],

})
export class LoginModule { }
