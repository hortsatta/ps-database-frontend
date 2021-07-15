import type { NextApiRequest, NextApiResponse } from 'next'
import { serializeToken } from 'config';

type Data = {
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
    // Destroy cookie
    res.setHeader('Set-Cookie', serializeToken(''));
    res.status(200).json({ message: 'Success' });
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong!' });
  }
};

export default handler;
