import axios from 'axios';

import { NEXT_API_URL, generateHeaders } from 'config';
import { AuthCredential, User, UserCredential } from 'models';

const baseURL = `${NEXT_API_URL}/auth`;

const parseUser = (data: any): User => {
  const { id, username, email, created_at, updated_at } = data;
  return {
    id,
    username,
    email,
    createdAt: created_at,
    updatedAt: updated_at
  };
};

const checkLoginSession = async () => {
  const { status, data } = await axios.get(
    `${baseURL}/user`,
    generateHeaders()
  );

  if (status !== 200) {
    throw new Error(data.message);
  }

  const result = parseUser(data.user);
  return new Promise<User>(resolve => resolve(result));
};

const login = async (credential: AuthCredential): Promise<User> => {
  const { status, data } = await axios.post(
    `${baseURL}/login`,
    credential,
    generateHeaders()
  );

  if (status !== 200) {
    throw new Error(data.message);
  }

  const result = parseUser(data.user);
  return new Promise<User>(resolve => resolve(result));
};

const logout = () => (
  axios.post(
    `${baseURL}/login`,
    {},
    generateHeaders()
  )
);

const register = async (credential: UserCredential): Promise<User> => {
  const { status, data } = await axios.post(
    `${baseURL}/register`,
    credential,
    generateHeaders()
  );

  if (status !== 200) {
    throw new Error(data.message);
  }

  const result = parseUser(data.user);
  return new Promise<User>(resolve => resolve(result));
};

export { checkLoginSession, login, logout, register };
