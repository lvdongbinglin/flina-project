"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const swagger_1 = require("@nestjs/swagger");
const app_module_1 = require("./bean/app.module");
const main_const_1 = require("./constant/main.const");
const http_exception_filter_1 = require("./filter/http-exception.filter");
const req_res_logger_middleware_1 = require("./middleware/req-res-logger.middleware");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const document = swagger_1.SwaggerModule.createDocument(app, main_const_1.swaggerDocumentOption);
    swagger_1.SwaggerModule.setup('/api', app, document);
    app.useGlobalFilters(new http_exception_filter_1.HttpExceptionFilter());
    app.use(req_res_logger_middleware_1.reqresLogger);
    await app.listen(main_const_1.port);
}
bootstrap();
//# sourceMappingURL=main.js.map