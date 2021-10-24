
export interface MysqlSecret {
  host: string, // 数据库ip地址
  port: number, // 端口
  username: string, // 登录名
  password: string, // 密码
  database: string, // 数据库名称
}

export interface MailSecret {
  host: string,
  port: number,
  auth: {
    user: string,
    pass: string,
  },
}

export interface TokenSecret {
  key: string,
}