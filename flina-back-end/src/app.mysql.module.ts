import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { mysqlconf } from './main.const';
@Module({
  imports: [
    TypeOrmModule.forRoot(mysqlconf),
  ],
  exports: [TypeOrmModule]
})
export class AppMysqlModule { }
