type User = {
  id: number;
  username: string;
  email: string;
  createdAt: string;
  updatedAt: string;
}

type UserCredential = {
  username: string;
  email: string;
  password: string;
}

export type { User, UserCredential };
