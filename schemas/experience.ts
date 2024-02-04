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
              description: 'description of the experience',
            }),
            defineField({
              name: 'icon',
              title: 'icon for experience',
              type: 'string',
              description: 'icon of the experience',
            }),
            defineField({
              name: 'image',
              title: 'Image',
              type: 'image',
              description: 'Image of the experience',
              options: {
                hotspot: true,
              },
            }),
          ],
        },
      ],
      description: 'Tabs with experience details',
    }),
  ],
};

export default experience;
