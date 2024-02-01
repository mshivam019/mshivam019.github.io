import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import schemaTypes from './schemas';

export default defineConfig({
  name: 'default',
  title: 'my-portfolio',

  projectId: 'h3g75c2d',
  dataset: 'development',
  basePath: '/studio',

  plugins: [structureTool()],

  schema: {
    types: schemaTypes,
  },
});
