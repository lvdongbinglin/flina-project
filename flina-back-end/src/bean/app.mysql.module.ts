import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EmailService } from 'src/service/email.service';
import { mysqlconf } from '../constant/main.const';

@Module({
  imports: [
    TypeOrmModule.forRoot(mysqlconf),
  ],
  providers: [
    EmailService
  ],
  exports: [TypeOrmModule]
})
export class AppMysqlModule { }
