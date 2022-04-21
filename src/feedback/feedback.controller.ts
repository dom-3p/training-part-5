import { Body, Controller, Get, Post } from '@nestjs/common';
import { Feedback } from './dto/feedback';
import { FeedbackService } from './feedback.service';

@Controller('feedback')
export class FeedbackController {
  constructor(private readonly feedbackService: FeedbackService) {}

  @Post()
  async createFeedback(@Body() feedback: Feedback): Promise<boolean> {
    return true;
  }

  @Get()
  async getFeedback(): Promise<Feedback[]> {
    return await this.feedbackService.getFeedbackList();
  }

  // Code comment
}
