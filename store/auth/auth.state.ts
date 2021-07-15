import { User } from 'models';

type AuthState = {
  loading: boolean;
  currentUser?: User;
}

const initialState: AuthState = {
  loading: false
};

export { initialState };
export type { AuthState };
