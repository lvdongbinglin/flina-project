import { Controller, Get, Post, Body, Patch, Param, Delete, Query, Put, BadRequestException, Logger } from '@nestjs/common';
import { LoginService } from './login.service';
import { CreateLoginDto } from './login.dto';
import { EmailService } from 'src/inside/base/email.service';



@Controller('user')
export class LoginController {
  constructor(
    private readonly loginService: LoginService,
    private readonly emailService: EmailService
  ) { }

  @Post()
  register(@Body() createLoginDto: CreateLoginDto) {
    Logger.log("登陆开始" + JSON.stringify(createLoginDto))
    const flag: boolean = this.check(createLoginDto)
    return this.loginService.logup(createLoginDto);
  }

  @Put()
  login(@Body() createLoginDto: CreateLoginDto) {
    return this.loginService.login(createLoginDto);
  }

  @Get('code/:email')
  getCode(@Param('email') email: string) {
    this.emailService.send(email, "验证码", "11")
  }

  @Get()
  findAll() {
    return this.loginService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.loginService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateLoginDto: CreateLoginDto) {
    return this.loginService.update(+id, updateLoginDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.loginService.remove(+id);
  }

  check(createLoginDto: CreateLoginDto): boolean {
    // throw new BadRequestException("邮箱格式异常：" + createLoginDto.email)
    return false;
  }
}
