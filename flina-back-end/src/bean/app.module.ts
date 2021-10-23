import { Module } from '@nestjs/common';

import { DictionaryModule } from './dictionary.module';
import { AppMysqlModule } from './app.mysql.module';
import { Connection } from 'typeorm';
import { LoginModule } from './login.module';
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
