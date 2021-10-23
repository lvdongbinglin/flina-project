import { Module } from '@nestjs/common';

import { Connection } from 'typeorm';
import { AppMysqlModule } from './app.mysql.module';
import { AppMailModule } from './app.mail.module';
import { AppOrmModule } from './app.orm.module';
import { AppTokenModule } from './app.token.module';

@Module({
  imports: [
    AppMysqlModule,
    AppMailModule,
    AppOrmModule,
  ],
})
export class AppModule {
  constructor(
    private readonly connection: Connection
  ) { }
}
