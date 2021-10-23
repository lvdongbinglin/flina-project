import { MailerOptions } from "@nestjs-modules/mailer";
import { EjsAdapter } from "@nestjs-modules/mailer/dist/adapters/ejs.adapter";
import { DocumentBuilder } from "@nestjs/swagger";
import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import { dirname } from "path";

// server conf
export const port = 4000;

// swagger conf
export const tag = {
  core: "核心"
}

export const swaggerDocumentOption = new DocumentBuilder()
  .setTitle('Nest管理端文档')
  .setDescription('简介') // 文档介绍
  .setVersion('1.0.0') // 文档版本
  .addTag(tag.core) // 每个tag标签都可以对应着几个@ApiUseTags('用户,安全') 然后被ApiUseTags注释，字符串一致的都会变成同一个标签下的
  // .setBasePath('http://localhost:5000')
  .build();
// 为了创建完整的文档（具有定义的HTTP路由），我们使用类的createDocument()方法SwaggerModule。此方法带有两个参数，分别是应用程序实例和基本Swagger选项。
// 最后一步是setup()。它依次接受（1）装入Swagger的路径，（2）应用程序实例, （3）描述Nest应用程序的文档。

// mysql conf
export const mysqlconf: TypeOrmModuleOptions =
{
  type: 'mysql', // 数据库类型
  host: '127.0.0.1', // 数据库ip地址
  port: 3308, // 端口
  username: 'root', // 登录名
  password: 'rootroot', // 密码
  database: 'flina', // 数据库名称
  entities: [__dirname + '/**/entity/*.entity{.ts,.js}'], // 扫描本项目中.entity.ts或者.entity.js的文件
  // 生产环境下禁用，不允许修改数据库表结构
  // 测试环境下开启，可以方便的常见表和字段
  synchronize: true, // 定义数据库表结构与实体类字段同步(这里一旦数据库少了字段就会自动加入,根据需要来使用),
  // namingStrategy: new SnakeNamingStrategy(),
  timezone: "+08:00",
  charset: "UTF8_GENERAL_CI"
}

export const emailconf: MailerOptions = {
  transport: {
    host: 'smtp.qq.com',
    port: 25,
    ignoreTLS: true,
    secure: false,
    auth: {
      user: '1745509482@qq.com',
      pass: 'wqnigsxazgffbaig',
    },
  },
  defaults: {
    from: 'dongqinglin 1745509482',
  },
  preview: false,
  template: {
    dir: process.cwd() + "/src/inside/conf",
    adapter: new EjsAdapter(), // or new PugAdapter() or new EjsAdapter()
    options: {
      strict: true,
    },
  },
}
