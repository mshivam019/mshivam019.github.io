import { defineField } from 'sanity';

const linkTree = {
  name: 'linktree',
  title: 'Link Tree',
  type: 'document',
  fields: [
    defineField({
      name: 'Links',
      title: 'Links',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'url',
              title: 'URL',
              type: 'url',
              description: 'URL for the  link',
            }),
            defineField({
              name: 'link',
              title: 'Name',
              type: 'string',
              description: 'Name of the Link',
            }),
            defineField({
              name: 'description',
              title: 'Description',
              type: 'string',
              description: 'Description of the Link',
            }),
            defineField({
              name: 'svg',
              title: 'SVG',
              type: 'image',
              description: 'SVG image for the tool',
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
              name: 'classname',
              title: 'Image Class Name',
              type: 'string',
              description: 'Classname for the image',
            }),
          ],
        },
      ],
      description: 'List of tools the person is familiar with',
    }),
  ],
};

export default linkTree;
