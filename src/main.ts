import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Feedback System')
    .setDescription('The feedback management system')
    .setVersion('1.0')
    .addTag('feedback')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  const listenPort: number = 3000;
  console.log(`Listening on port ${listenPort}`);
  await app.listen(listenPort);
}
bootstrap();
