import { AuditTrail } from './common.model';

type User = AuditTrail & {
  id: number;
  username: string;
  email: string;
}

type UserCredential = {
  username: string;
  email: string;
  password: string;
}

export type { User, UserCredential };
