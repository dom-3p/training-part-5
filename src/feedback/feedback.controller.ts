import { Body, Controller, Get, Param, Post } from '@nestjs/common';
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
  async getFeedbackList(): Promise<Feedback[]> {
    return await this.feedbackService.getFeedbackList();
  }

  @Get(':id')
  async getFeedbackItem(@Param('id') id: number): Promise<Feedback> {
    return await this.feedbackService.getFeedbackItem(id);
  }
}
