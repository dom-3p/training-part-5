import { ApiProperty } from '@nestjs/swagger';

export class Feedback {
  @ApiProperty({ description: 'The feedback category' })
  category: string;

  @ApiProperty({
    description: 'A flag to show if this feedback item has been actioned',
  })
  actioned: boolean;

  @ApiProperty({ description: 'When this feedback item was created' })
  @ApiProperty()
  createdAt: Date;

  @ApiProperty({
    description: 'The unique content id to which this feedback relates',
  })
  @ApiProperty()
  contentId: string; // GUID / UUID format

  @ApiProperty({ description: 'The id of the user lodging this feedback' })
  userId: number;
}
