import { NextApiRequest, NextApiResponse } from 'next';

const SECRET = process.env.MY_SECRET_TOKEN;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> {
  try {
    const { secret } = req.query;

    // Check if the provided secret matches the expected secret
    if (secret !== SECRET) {
      res.status(401).json({ message: 'Invalid token' });
      return;
    }

    // Trigger the revalidation for the index page
    await res.revalidate('/');

    res.status(200).json({ message: 'Revalidation triggered successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Internal Server Error' });
  }
}
