import { Test, TestingModule } from '@nestjs/testing';
import { FeedbackHydratorService } from './feedback-hydrator.service';

describe('FeedbackHydratorService', () => {
  let service: FeedbackHydratorService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FeedbackHydratorService],
    }).compile();

    service = module.get<FeedbackHydratorService>(FeedbackHydratorService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
