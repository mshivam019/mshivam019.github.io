import { NextApiRequest, NextApiResponse } from 'next';

const SECRET = process.env.MY_SECRET_TOKEN;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
): Promise<void> {
  try {
    const { secret, page } = req.query;

    // Check if the provided secret matches the expected secret
    if (secret !== SECRET) {
      res.status(401).json({ message: 'Invalid token' });
      return;
    }

    // Trigger the revalidation for the index page
    if (page === 'home') await res.revalidate('/');
    else if (page === 'about') await res.revalidate('/about');
    else if (page === '/journey') await res.revalidate('/journey');
    else if (page === 'projects') await res.revalidate('/projects');
    else if (page === 'connect') await res.revalidate('/connect');
    else {
      await Promise.all([
        res.revalidate('/'),
        res.revalidate('/about'),
        res.revalidate('/journey'),
        res.revalidate('/projects'),
        res.revalidate('/connect'),
      ]);
    }

    res.status(200).json({ message: 'Revalidation triggered successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Internal Server Error' });
  }
}
