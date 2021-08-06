import { AuditTrail } from './common.model';
import { Review } from './review.model';
import { User } from './user.model';

export type Game = AuditTrail & {
  title: string;
  developer: string;
  publisher: string;
  releaseDate: Date | string;
  platforms: string[];
  id?: number;
  description?: string;
  user?: User;
  slug?: string;
  reviews?: Review[];
  coverImage?: any;
  featureImage?: any;
  publishedAt?: Date | string;
}
