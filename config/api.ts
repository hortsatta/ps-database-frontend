import { AxiosRequestConfig } from 'axios';
import cookie from 'cookie';

const API_URL = process.env.NEXT_PUBLIC_API_URL;
const NEXT_API_URL = process.env.NEXT_PUBLIC_FRONTEND_API_URL;

const generateHeaders = (token?: string): AxiosRequestConfig => {
  const authorization = token
    ? { Authorization: `Bearer ${token}` }
    : {};

  return {
    headers: {
      ...authorization,
      'Content-Type': 'application/json'
    }
  };
};

const serializeToken = (token: string): string => (
  cookie.serialize('token', token, {
    httpOnly: true,
    secure: process.env.NODE_ENV !== 'development',
    sameSite: 'strict',
    path: '/',
    ...!!token.trim()
      ? { maxAge: 60 * 60 * 24 * 7 } // 1 week
      : { expires: new Date(0) } // Just let it die
  })
)

export { generateHeaders, serializeToken, API_URL, NEXT_API_URL };
