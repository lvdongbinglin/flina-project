import { MailSecret, MysqlSecret, TokenSecret } from "./interface"


export const mysqlSecert: MysqlSecret = {
  host: '127.0.0.1', // 数据库ip地址
  port: 3306, // 端口
  username: 'root', // 登录名
  password: 'rootroot', // 密码
  database: 'flina', // 数据库名称
}

export const mailSecret: MailSecret = {
  host: 'smtp.qq.com',
  port: 25,
  auth: {
    user: '1745509482@qq.com',
    pass: 'wqnigsxazgffbaig',
  }
}

export const tokenSecret: TokenSecret = {
  key: "Bearer"
}

export const RoleSecret = {
  1: "ADMIN",
  2: "USER"
}