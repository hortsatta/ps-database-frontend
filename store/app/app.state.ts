import { CoreState } from '../core/core.state';
import { AuthState } from '../auth/auth.state';

export type AppState = {
  core: CoreState;
  auth: AuthState;
}
