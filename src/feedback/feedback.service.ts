import { Injectable } from '@nestjs/common';
import { Feedback } from './dto/feedback';

@Injectable()
export class FeedbackService {
  async getFeedbackList(): Promise<Feedback[]> {
    let feedbackList: Feedback[] = [];

    let feedback = new Feedback();
    feedback.category = 'Too Hard';
    feedback.actioned = false;
    feedback.contentId = '762eb547-f4bf-40a5-a619-3714cdaeece8';
    feedback.createdAt = new Date();
    feedback.userId = 1;

    feedbackList.push(feedback);

    return feedbackList;
  }
}
