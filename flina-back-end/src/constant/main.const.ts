import { MailerOptions } from "@nestjs-modules/mailer";
import { EjsAdapter } from "@nestjs-modules/mailer/dist/adapters/ejs.adapter";
import { DocumentBuilder } from "@nestjs/swagger";
import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import { dirname } from "path";
import { mailSecret, mysqlSecert } from "./secret.const";

// server conf
export const port = 4000;
export const swaggerBasePath = "api"
export const swaggerUrl = `http://127.0.0.1:${port}/${swaggerBasePath}`;
// swagger conf
export const tag = {
  core: "核心"
}

export const swaggerDocumentOption = new DocumentBuilder()
  .setTitle('Nest管理端文档')
  .setDescription('简介') // 文档介绍
  .setVersion('1.0.0') // 文档版本
  .addTag(tag.core) // 每个tag标签都可以对应着几个@ApiUseTags('用户,安全') 然后被ApiUseTags注释，字符串一致的都会变成同一个标签下的
  .setBasePath(swaggerBasePath)
  .build();

// mysql conf
export const mysqlconf: TypeOrmModuleOptions =
{
  type: 'mysql', // 数据库类型
  host: mysqlSecert.host, // 数据库ip地址
  port: mysqlSecert.port, // 端口
  username: mysqlSecert.username, // 登录名
  password: mysqlSecert.password, // 密码
  database: mysqlSecert.database, // 数据库名称
  entities: [__dirname + '/../**/entity/*.entity.js'],
  synchronize: true,
  timezone: "+08:00",
  charset: "UTF8_GENERAL_CI"
}

export const emailconf: MailerOptions = {
  preview: false,
  defaults: {
    from: 'dongqinglin 1745509482',
  },
  template: {
    dir: __dirname + "/**/assets",
    adapter: new EjsAdapter(),
  },
  transport: {
    host: mailSecret.host,
    port: mailSecret.port,
    auth: mailSecret.auth,
    ignoreTLS: true,
    secure: false,
  },
}
