import { Module } from '@nestjs/common';



import { DictionaryModule } from './inside/domain/dictionary/dictionary.module';
import { AppMysqlModule } from './app.mysql.module';
import { Connection } from 'typeorm';
import { APP_FILTER } from '@nestjs/core';
import { HttpExceptionFilter } from './base/http-exception.filter';
import { LoginModule } from './inside/domain/login/login.module';
import { AppMailModule } from './app.mail.module';



@Module({
  imports: [
    AppMysqlModule,
    DictionaryModule,
    LoginModule,
    AppMailModule,
  ],
  controllers: [],
  providers: [
    // {
    //   provide: APP_FILTER,
    //   useClass: HttpExceptionFilter,
    // },
  ],
})
export class AppModule {
  constructor(
    private readonly connection: Connection
  ) { }
}
