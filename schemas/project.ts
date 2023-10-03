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
              name: 'descriptionOne',
              title: 'Project Description line 1',
              type: 'text',
              description: 'Point 1 of description of the project',
            }),
            defineField({
              name: 'descriptionTwo',
              title: 'Project Description line 2',
              type: 'text',
              description: 'Point 2 of description of the project',
            }),
            defineField({
              name: 'descriptionThree',
              title: 'Project Description line 3',
              type: 'text',
              description: 'Point 3 of description of the project',
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
