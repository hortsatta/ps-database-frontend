import type { NextApiRequest, NextApiResponse } from 'next'
import cookie from 'cookie';
import axios from 'axios';

import { generateHeaders, API_URL } from 'config';

type Data = {
  user?: any
  message?: string;
}

const handler = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  // Validate method used, only allow GET
  if (req.method !== 'GET') {
    res.setHeader('Allow', ['GET']);
    res.status(405).json({ message: `Method ${req.method} not allowed.` });
    return;
  }

  try {
    const { token } = cookie.parse(req.headers.cookie || '');
    const { status, data } = await axios.get(
      `${API_URL}/users/me`,
      generateHeaders(token)
    );

    if (status === 200) {
      res.status(200).json({ user: data })
    } else {
      const { statusCode, message } = data;
      res.status(statusCode).json({ message });
    }
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong!' });
  }
}

export default handler;
