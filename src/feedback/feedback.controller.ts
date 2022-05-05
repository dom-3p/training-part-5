import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { Feedback } from './dto/feedback';
import { FeedbackService } from './feedback.service';

@Controller('feedback')
export class FeedbackController {
  constructor(private readonly feedbackService: FeedbackService) {}

  @Post()
  async createFeedback(@Body() feedback: Feedback): Promise<number> {
    return await this.feedbackService.createFeedback(feedback);
  }

  @Put()
  async updateFeedback(@Body() feedback: Feedback): Promise<Feedback> {
    return await this.feedbackService.updateFeedback(feedback);
  }

  @Delete(':id')
  async deleteFeedback(@Param('id') id: number): Promise<boolean> {
    return await this.feedbackService.deleteFeedback(id);
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
