import { Injectable } from '@nestjs/common';
import { Feedback } from './entities/feedback.entity';
import { Feedback as FeedbackDto } from './dto/feedback';

@Injectable()
export class FeedbackHydratorService {
  public FeedbackEntitiesToDto(feedbackEntities: Feedback[]): FeedbackDto[] {
    let feedbackDtoEntries: FeedbackDto[] = [];

    for (let i = 0; i < feedbackEntities.length; i++) {
      feedbackDtoEntries.push({
        id: feedbackEntities[i].id,
        category: feedbackEntities[i].category,
        description: feedbackEntities[i].description,
        actioned: feedbackEntities[i].actioned,
        createdAt: feedbackEntities[i].createdAt,
        contentId: feedbackEntities[i].contentId,
        userId: feedbackEntities[i].userId,
      });
    }

    return feedbackDtoEntries;
  }

  public FeedbackEntityToDto(feedbackRecord: Feedback): FeedbackDto {
    return {
      id: feedbackRecord.id,
      category: feedbackRecord.category,
      description: feedbackRecord.description,
      actioned: feedbackRecord.actioned,
      createdAt: feedbackRecord.createdAt,
      contentId: feedbackRecord.contentId,
      userId: feedbackRecord.userId,
    };
  }
}
