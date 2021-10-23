"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.emailconf = exports.mysqlconf = exports.swaggerDocumentOption = exports.tag = exports.port = void 0;
const ejs_adapter_1 = require("@nestjs-modules/mailer/dist/adapters/ejs.adapter");
const swagger_1 = require("@nestjs/swagger");
exports.port = 4000;
exports.tag = {
    core: "核心"
};
exports.swaggerDocumentOption = new swagger_1.DocumentBuilder()
    .setTitle('Nest管理端文档')
    .setDescription('简介')
    .setVersion('1.0.0')
    .addTag(exports.tag.core)
    .build();
exports.mysqlconf = {
    type: 'mysql',
    host: '127.0.0.1',
    port: 3308,
    username: 'root',
    password: 'rootroot',
    database: 'flina',
    entities: [__dirname + '/**/entity/*.entity{.ts,.js}'],
    synchronize: true,
    timezone: "+08:00",
    charset: "UTF8_GENERAL_CI"
};
exports.emailconf = {
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
        adapter: new ejs_adapter_1.EjsAdapter(),
        options: {
            strict: true,
        },
    },
};
//# sourceMappingURL=main.const.js.map