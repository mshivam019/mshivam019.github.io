import { defineField } from '@sanity/types';

const hero = {
  name: 'hero',
  title: 'Hero',
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
      name: 'image',
      title: 'Image',
      type: 'image',
      description: 'Image of the person',
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
      name: 'technologies',
      title: 'Technologies',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'List of technologies the person is familiar with',
    }),
    defineField({
      name: 'tools',
      title: 'Tools',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'List of tools the person is familiar with',
    }),
    defineField({
      name: 'buttons',
      title: 'Buttons',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'label',
              title: 'Label',
              type: 'string',
              description: 'Label for the button',
            }),
            defineField({
              name: 'url',
              title: 'URL',
              type: 'url',
              description: 'URL for the button link',
            }),
          ],
        },
      ],
      description: 'Buttons for links',
    }),
  ],
};

export default hero;
