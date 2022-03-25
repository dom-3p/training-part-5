export class Feedback {
  category: string;
  actioned: boolean;
  createdAt: Date;
  contentId: string; // GUID / UUID format
  userId: number;
}
