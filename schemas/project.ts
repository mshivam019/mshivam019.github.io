import { defineField } from '@sanity/types';

const project = {
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    defineField({
      name: 'projects',
      title: 'Projects',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'title',
              title: 'Project Title',
              type: 'string',
              description: 'The title of the project',
            }),
            defineField({
              name: 'description',
              title: 'Project Description',
              type: 'text',
              description: 'A brief description of the project',
            }),
            defineField({
              name: 'technologies',
              title: 'Project Technologies',
              type: 'array',
              of: [{ type: 'string' }],
              description: 'List of technologies used in the project',
            }),
            defineField({
              name: 'image',
              title: 'Project Image',
              type: 'image',
              description: 'The main image for the project',
              options: {
                hotspot: true,
              },
            }),
            defineField({
              name: 'altText',
              title: 'Alt Text',
              type: 'string',
              description: 'Alt text for the image',
            }),
            defineField({
              name: 'githubLink',
              title: 'Project GitHub Link',
              type: 'url',
              description: 'Link to the GitHub repository for the project',
            }),
            defineField({
              name: 'liveLink',
              title: 'Project Live Link',
              type: 'url',
              description: 'Link to the live version of the project',
            }),
          ],
        },
      ],
      description: 'Array of projects',
    }),
  ],
};

export default project;
