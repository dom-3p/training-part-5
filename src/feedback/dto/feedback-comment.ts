import { ApiProperty } from '@nestjs/swagger';

export class FeedbackComment {
  @ApiProperty({ description: 'The comment text' })
  comment: string;

  @ApiProperty({ description: 'The id of the user lodging this comment' })
  userId: number;

  @ApiProperty({ description: 'When this comment was created' })
  createdAt: Date;
}
