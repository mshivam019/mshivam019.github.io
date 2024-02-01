import { defineField } from '@sanity/types';

const project = {
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      description: 'The name of the person',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      description: 'A brief description about the person',
    }),
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
              description: 'description of the project',
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
            defineField({
              name: 'className',
              title: 'custom styling',
              type: 'string',
              description: 'add custom styling to the project',
            }),
          ],
        },
      ],
      description: 'Array of projects',
    }),
  ],
};

export default project;
