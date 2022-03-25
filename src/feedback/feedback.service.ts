import { Injectable } from '@nestjs/common';
import { Feedback } from './feedback';

@Injectable()
export class FeedbackService {
  getFeedbackList(): Feedback[] {
    let feedbackList: Feedback[] = [];

    let feedback = new Feedback();
    feedback.category = 'Too Hard';
    feedback.actioned = false;
    feedback.contentId = '762eb547-f4bf-40a5-a619-3714cdaeece8';
    feedback.createdAt = new Date();
    feedback.userId = 1;

    let feedback2 = new Feedback();
    feedback2.category = 'Too Easy';
    feedback2.actioned = false;
    feedback2.contentId = '762eb547-f4bf-40a5-a619-3714cdaeece8';
    feedback2.createdAt = new Date();
    feedback2.userId = 2;

    feedbackList.push(feedback);
    feedbackList.push(feedback2);

    return feedbackList;
  }
}
