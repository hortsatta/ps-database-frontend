import type { NextApiRequest, NextApiResponse } from 'next'
import axios from 'axios';

import { generateHeaders, serializeToken, API_URL } from 'config';

type Data = {
  user?: any;
  message?: string;
}

const handler = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  // Validate method used, only allow POST
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    res.status(405).json({ message: `Method ${req.method} not allowed.` });
    return;
  }

  try {
    const { username, email, password } = req.body;

    const { status, data } = await axios.post(
      `${API_URL}/auth/local/register`,
      { username, email, password },
      generateHeaders()
    );

    if (status === 200) {
      // Set cookie in server side.
      res.setHeader('Set-Cookie', serializeToken(data.jwt));
      res.status(200).json({ user: data.user });
    } else {
      const { statusCode, message } = data;
      res.status(statusCode).json({
        message: message[0].messages[0].message
      });
    }
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong!' });
  }
};

export default handler;
