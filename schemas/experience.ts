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
              name: 'descriptionOne',
              title: 'DescriptionOne',
              type: 'text',
              description: '1st point of description of the experience',
            }),
            defineField({
              name: 'descriptionTwo',
              title: 'DescriptionTwo',
              type: 'text',
              description: '2nd point of description of the experience',
            }),
            defineField({
              name: 'descriptionThree',
              title: 'DescriptionThree',
              type: 'text',
              description: '3rd point description of the experience',
            }),
            defineField({
              name: 'location',
              title: 'location',
              type: 'string',
              description: 'location of the experience',
            }),
          ],
        },
      ],
      description: 'Tabs with experience details',
    }),
  ],
};

export default experience;
