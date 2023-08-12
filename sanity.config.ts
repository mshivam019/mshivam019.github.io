import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import schemaTypes from './schemas';

export default defineConfig({
  name: 'default',
  title: 'my-portfolio',

  projectId: 'h3g75c2d',
  dataset: 'production',
  basePath: '/studio',

  plugins: [deskTool()],

  schema: {
    types: schemaTypes,
  },
});
