
export class CreateLoginDto {
  // 名称
  login_name: string;
  // 邮箱
  email: string;
  // 密码
  password: string;
  // 验证码
  code: string;
}

export class ChangeLoginDto {
  old: CreateLoginDto;
  new: CreateLoginDto;
}



