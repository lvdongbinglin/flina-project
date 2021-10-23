import { MailerService } from '@nestjs-modules/mailer';
import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class EmailService {
  constructor(
    private readonly mailService: MailerService
  ) { }

  send(toEmail: string, suject: string, html: string): void {
    const code = html;
    const date = new Date();
    console.log(toEmail, suject, code, process.cwd() + "/src/inside/conf")
    const emailOptions = {
      to: toEmail,
      from: '1745509482@qq.com',
      subject: suject,
      template: "src/inside/conf/send-code-email",
      context: {
        code, //验证码
        date, //日期
        sign: '系统邮件,回复无效。' //发送的签名,当然也可以不要
      }
    }

    this.mailService.sendMail(emailOptions).then(
      _ => {
        Logger.log("Send mail success.")
      }
    ).catch(
      err => Logger.error(err)
    )
  }
}
