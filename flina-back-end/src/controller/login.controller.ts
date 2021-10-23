import { Controller, Get, Post, Body, Patch, Param, Delete, Query, Put, BadRequestException, Logger, UseGuards } from '@nestjs/common';
import { LoginService } from '../service/login.service';
import { LoginDto } from '../dto/login.dto';
import { EmailService } from '../service/email.service';
import { randomInt } from 'crypto';
import { getRandomCode, hashPassword, isNull } from 'src/constant/function';
import { isBlank } from '../constant/function';
import { Message } from 'src/dto/message.dto';
import { BehaviorSubject, Subject } from 'rxjs';
import { Login } from 'src/entity/login.entity';
import { tokenSecret } from '../constant/secret.const';
import { TokenService } from 'src/service/token.service';
import { JwtStrategy } from 'src/service/jwt.strategy.service';
import { RolesGuard } from 'src/guard/roles.guard';
import { Level, Roles } from 'src/constant/decorator';


const emailRex = /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/;

/**
 * 用户登陆控制器
 * 主管 用户登陆、用户注册、用户找回密码、用户找回账户名
 */
@Controller('login')
export class LoginController {
  constructor(
    private readonly loginService: LoginService,
    private readonly emailService: EmailService,
    private readonly tokenService: TokenService,
    private readonly jwtStrategy: JwtStrategy,
  ) { }

  /**
   * 两段式注册，第一阶段，注册一个唯一标识的邮箱，第二阶段，根据邮箱注册其他信息
   * 这里是第二阶段，注册其他用户信息
   * @param signupLoginDto 需要名称、密码、邮箱、邮箱验证码四个元素
   * @returns 
   */
  @Post('signup')
  async register(@Body() signupLoginDto: LoginDto) {
    Logger.log("注册开始" + JSON.stringify(signupLoginDto))
    this.checkAndEncryto(signupLoginDto)
    this.checkEmail(signupLoginDto.email)
    await this.loginService.logup(signupLoginDto);
    return Message.successful("注册成功", null)
  }

  @Post('signin')
  async login(@Body() signinLoginDto: LoginDto) {
    Logger.log("登陆开始" + JSON.stringify(signinLoginDto))
    this.checkAndEncryto(signinLoginDto)

    const isLoginSucceed = await this.loginService.login(signinLoginDto);
    if (!isLoginSucceed) {
      return Message.clientError("登陆名或密码错误", null)
    }

    const token = await this.tokenService.genToken(signinLoginDto)

    return Message.successful("登陆成功", {
      user: signinLoginDto,
      token
    })

  }


  @Put('pass')
  changePass(@Body() createLoginDto: LoginDto) {
    Logger.log("找回密码开始" + JSON.stringify(createLoginDto))
    this.checkAndEncryto(createLoginDto)
    return this.loginService.login(createLoginDto);
  }

  /**
  * 两段式注册，第一阶段，注册一个唯一标识的邮箱，第二阶段，根据邮箱注册其他信息
   * 这里是第一阶段，注册一个邮箱和验证码
   * @param email 需要的邮箱
   */
  @Get('code/email/:email')
  getCode(@Param('email') email: string) {
    Logger.log("获取验证码开始" + email)
    const code = getRandomCode();
    this.checkEmail(email)
    this.loginService.saveCode(email, code);
    this.emailService.sendCode(email, code.toString())
    return Message.successful("获取验证码成功", null)
  }

  @Get('login_name/email/:email/code/:code')
  async getLoginName(@Param('email') email: string, @Param('code') code: number) {
    Logger.log("找回用户名开始" + email + code)
    this.checkEmail(email)
    const loginUserName = await this.loginService.getLoginName(email, code)
    return Message.successful("找回用户名成功", loginUserName);
  }
  //------------较高权限----------------

  /**
   * 
   * @returns 
   */

  @Get("all")
  @Roles('admin')
  @Level(10)
  async findAll() {
    return await this.loginService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.loginService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateLoginDto: LoginDto) {
    return this.loginService.update(+id, updateLoginDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.loginService.remove(+id);
  }

  /**
   * 校验参数,顺便加密密码
   * @param loginDto 判断名称是否为空、判断密码是否为空
   * @returns 
   */
  checkAndEncryto(loginDto: LoginDto): boolean {
    if (isNull(loginDto)) {
      throw new BadRequestException("异常，没有输入有效的用户名、密码、邮箱、验证码")
    }
    if (isNull(loginDto.username) || isBlank(loginDto.username)) {
      throw new BadRequestException("异常，用户名不为空，或者空格、缩进、换行这类空字符")
    }
    if (isNull(loginDto.password) || isBlank(loginDto.password)) {
      throw new BadRequestException("异常，密码不为空，或者空格、缩进、换行这类空字符")
    }
    loginDto.password = hashPassword(loginDto.password);
    return true;
  }

  /**
   * 校验邮箱
   * @param email 判断邮箱是否为空，是否符合格式
   */
  checkEmail(email: string) {
    if (isNull(email) || isBlank(email) || !emailRex.test(email)) {
      throw new BadRequestException("邮箱格式异常：" + email)
    }
  }
}
