
export class LoginDto {
  // 名称
  username: string;
  // 邮箱
  email: string;
  // 密码
  password: string;
  // 验证码
  code: number;
}

export class ChangeLoginDto {
  old: LoginDto;
  new: LoginDto;
}



