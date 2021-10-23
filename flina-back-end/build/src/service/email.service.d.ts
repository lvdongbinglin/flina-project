import { MailerService } from '@nestjs-modules/mailer';
export declare class EmailService {
    private readonly mailService;
    constructor(mailService: MailerService);
    send(toEmail: string, suject: string, html: string): void;
}
