import { MailerModule } from '@nestjs-modules/mailer';
import { Module } from '@nestjs/common';
import { PugAdapter } from '@nestjs-modules/mailer/dist/adapters/pug.adapter';
import { EjsAdapter } from '@nestjs-modules/mailer/dist/adapters/ejs.adapter';
import path from 'path';
import { emailconf } from '../constant/main.const';
import { EmailService } from '../service/email.service';

@Module({
  imports: [
    MailerModule.forRoot(emailconf)
  ],
  providers: [EmailService],
})
export class AppMailModule { }
