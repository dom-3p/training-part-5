import { Injectable } from '@nestjs/common';
import { getConnection } from 'typeorm';
import { Feedback } from './dto/feedback';
import { Feedback as FeedbackEntity } from './entities/feedback.entity';
import { FeedbackHydratorService } from './feedback-hydrator.service';

@Injectable()
export class FeedbackService {
  constructor(private readonly feedbackHydrator: FeedbackHydratorService) {}

  async getFeedbackList(): Promise<Feedback[]> {
    const feedbackRecords = await getConnection()
      .getRepository(FeedbackEntity)
      .createQueryBuilder('f')
      .where('f.actioned = FALSE')
      .orderBy('f.createdAt', 'DESC')
      .getMany();

    return this.feedbackHydrator.FeedbackEntitiesToDto(feedbackRecords);
  }

  async getFeedbackItem(id: number): Promise<Feedback> {
    const feedbackRecord = await getConnection()
      .getRepository(FeedbackEntity)
      .createQueryBuilder('f')
      .where('f.id = :id', { id: id })
      .getOne();

    return this.feedbackHydrator.FeedbackEntityToDto(feedbackRecord);
  }
}
