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

  async createFeedback(feedback: Feedback): Promise<number> {
    // TODO: Add validation!
    const feedbackRec = await getConnection()
      .createQueryBuilder()
      .insert()
      .into(FeedbackEntity)
      .values([
        {
          category: feedback.category,
          description: feedback.description,
          actioned: false,
          contentId: feedback.contentId,
          userId: feedback.userId,
        },
      ])
      .execute();

    return feedbackRec.identifiers[0].id;
  }

  async updateFeedback(feedback: Feedback): Promise<Feedback> {
    // TODO: Add validation!
    await getConnection()
      .createQueryBuilder()
      .update(FeedbackEntity)
      .set({
        category: feedback.category,
        description: feedback.description,
        actioned: feedback.actioned,
      })
      .where('id = :id', { id: feedback.id })
      .execute();

    const updatedFeedbackDto = await this.getFeedbackItem(feedback.id);

    return updatedFeedbackDto;
  }

  async deleteFeedback(id: number): Promise<boolean> {
    // TODO: Add validation!
    await getConnection()
      .createQueryBuilder()
      .delete()
      .from(FeedbackEntity)
      .where('id = :id', { id: id })
      .execute();

    return true;
  }
}
