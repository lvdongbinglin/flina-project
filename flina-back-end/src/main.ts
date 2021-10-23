import { NestFactory, Reflector } from '@nestjs/core';
import { AuthGuard } from '@nestjs/passport';
import { SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './bean/app.module';
import { port, swaggerDocumentOption, swaggerUrl } from './constant/main.const';
import { HttpExceptionFilter } from './filter/http-exception.filter';
import { RolesGuard } from './guard/roles.guard';
import { reqresLogger } from './middleware/req-res-logger.middleware';

export function consoleSplit() {
  console.log("----------");
}

async function bootstrap() {
  // app
  const app = await NestFactory.create(AppModule);
  // filter
  app.useGlobalFilters(new HttpExceptionFilter())
  // middleware
  app.use(reqresLogger);

  // swagger
  SwaggerModule.setup('/api', app, SwaggerModule.createDocument(app, swaggerDocumentOption));

  await app.listen(port);
  consoleSplit();
  console.log(`The backend app running at http://127.0.0.1:${port}`)
  console.log(`The swagger api running at ${swaggerUrl}`);

}

function projectParamShow() {
  consoleSplit()
  console.log("_dirname: " + __dirname)
  consoleSplit()
}

projectParamShow()
bootstrap();
