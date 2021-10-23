import { LoginService } from '../service/login.service';
import { CreateLoginDto } from '../dto/login.dto';
import { EmailService } from '../service/email.service';
export declare class LoginController {
    private readonly loginService;
    private readonly emailService;
    constructor(loginService: LoginService, emailService: EmailService);
    register(createLoginDto: CreateLoginDto): void;
    login(createLoginDto: CreateLoginDto): void;
    getCode(email: string): void;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateLoginDto: CreateLoginDto): string;
    remove(id: string): string;
    check(createLoginDto: CreateLoginDto): boolean;
}
