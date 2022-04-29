import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FeedbackController } from './feedback/feedback.controller';
import { FeedbackService } from './feedback/feedback.service';
import { FeedbackHydratorService } from './feedback/feedback-hydrator.service';

@Module({
  imports: [TypeOrmModule.forRoot()],
  controllers: [AppController, FeedbackController],
  providers: [AppService, FeedbackService, FeedbackHydratorService],
})
export class AppModule {}
