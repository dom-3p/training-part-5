import { Controller, Get } from '@nestjs/common';
import { Feedback } from './feedback';
import { FeedbackService } from './feedback.service';

@Controller('feedback')
export class FeedbackController {
  constructor(private readonly feedbackService: FeedbackService) {}

  @Get()
  getFeedback(): Feedback[] {
    return this.feedbackService.getFeedbackList();
  }
}
