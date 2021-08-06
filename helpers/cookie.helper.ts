import cookie from 'cookie';

export const parseCookies = (req: any) => {
  if (!req) { return ''; }
  return cookie.parse(req.headers.cookie || '');
};
