import { createClient, type ClientConfig } from '@sanity/client';

const config: ClientConfig = {
  projectId: 'h3g75c2d',
  dataset: 'production',
  apiVersion: '2023-08-12',
  useCdn: false,
};

const client = createClient(config);

export default client;
