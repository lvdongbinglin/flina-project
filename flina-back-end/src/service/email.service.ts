import { MailerService } from '@nestjs-modules/mailer';
import { Injectable, Logger } from '@nestjs/common';

const subject = "[君名]请查收您的验证码"

@Injectable()
export class EmailService {
  constructor(
    private readonly mailService: MailerService
  ) { }


  sendCode(toEmail: string, code: string): void {
    const date = new Date();
    Logger.log(toEmail + subject + code)
    const emailOptions = {
      to: toEmail,
      from: '1745509482@qq.com',
      subject: subject,
      template: "src/assets/send-code-email",
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
