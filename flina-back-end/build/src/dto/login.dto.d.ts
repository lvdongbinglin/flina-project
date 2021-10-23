export declare class CreateLoginDto {
    login_name: string;
    email: string;
    password: string;
    code: string;
}
export declare class ChangeLoginDto {
    old: CreateLoginDto;
    new: CreateLoginDto;
}
