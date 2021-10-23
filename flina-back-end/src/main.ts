import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
<<<<<<< HEAD
import { AppModule } from './bean/app.module';
import { port, swaggerDocumentOption } from './constant/main.const';
import { HttpExceptionFilter } from './filter/http-exception.filter';
import { reqresLogger } from './middleware/req-res-logger.middleware';
import { filter } from 'rxjs/operators';
=======
import { AppModule } from './app.module';
import { port, swaggerDocumentOption } from './main.const';
import { HttpExceptionFilter } from './base/http-exception.filter';
import { reqresLogger } from './base/req-res-logger.middleware';
>>>>>>> 24004e3 (1)


async function bootstrap() {

  const app = await NestFactory.create(AppModule);
  const document = SwaggerModule.createDocument(app, swaggerDocumentOption);
  SwaggerModule.setup('/api', app, document);
  app.useGlobalFilters(new HttpExceptionFilter())
  app.use(reqresLogger);
  await app.listen(port);

}
bootstrap();
