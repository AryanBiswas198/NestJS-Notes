import { NestFactory, HttpAdapterHost } from '@nestjs/core';
import { AppModule } from './app.module';
import { AllExceptionsFilter } from './all-exceptions.filter';
// import { MyLoggerService } from './my-logger/my-logger.service';

async function bootstrap() {

  const app = await NestFactory.create(AppModule);

  const {httpAdapter} = app.get(HttpAdapterHost);
  app.useGlobalFilters(new AllExceptionsFilter(httpAdapter));


  // const app = await NestFactory.create(AppModule, {
  //     bufferLogs: true,
  // });

  // app.useLogger(app.get(MyLoggerService));

  // Enabling Cors
  app.enableCors();

  // EG: http://localhost:3000/api/......
  app.setGlobalPrefix('api');

  await app.listen(3000);
}
bootstrap();
