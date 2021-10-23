import { CreateLoginDto } from '../dto/login.dto';
import { Repository } from 'typeorm';
import { Login } from '../entity/login.entity';
export declare class LoginService {
    private readonly repo;
    constructor(repo: Repository<Login>);
    login(createLoginDto: CreateLoginDto): void;
    logup(createLoginDto: CreateLoginDto): void;
    getCode(): void;
    create(createLoginDto: CreateLoginDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateLoginDto: CreateLoginDto): string;
    remove(id: number): string;
}
