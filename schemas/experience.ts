import { defineField } from '@sanity/types';

const experience = {
  name: 'experience',
  title: 'Experience',
  type: 'document',
  fields: [
    defineField({
      name: 'tabs',
      title: 'Tabs',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'id',
              title: 'ID',
              type: 'number',
            }),
            defineField({
              name: 'title',
              title: 'Tab Title',
              type: 'string',
              description: 'The title of the tab',
            }),
            defineField({
              name: 'date',
              title: 'Date',
              type: 'string',
              description: 'Date of the experience',
            }),
            defineField({
              name: 'description',
              title: 'Description',
              type: 'text',
              description: 'Description of the experience',
            }),
            defineField({
              name: 'link',
              title: 'Link',
              type: 'url',
              description: 'Link for more details',
            }),
            defineField({
              name: 'image',
              title: 'Image',
              type: 'image',
              description: 'URL of the image',
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
          ],
        },
      ],
      description: 'Tabs with experience details',
    }),
  ],
};

export default experience;
