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
      name: 'classname',
      title: 'Image Class Name',
      type: 'string',
      description: 'Classname for the image',
    }),
    defineField({
      name: 'skills',
      title: 'Skills',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'name',
              title: 'Name',
              type: 'string',
              description: 'Name of the tool',
            }),
            defineField({
              name: 'level',
              title: 'Level',
              type: 'string',
              description: 'Proficiency level with the tool',
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
    // Fields for Certificates
    defineField({
      name: 'certificates',
      title: 'Certificates',
      type: 'array',
      of: [
        {
          type: 'document',
          name: 'certificate',
          title: 'Certificate',
          fields: [
            defineField({
              name: 'url',
              title: 'URL',
              type: 'url',
              description: 'URL for the certificate',
            }),
            defineField({
              name: 'title',
              title: 'Title',
              type: 'string',
              description: 'Title of the certificate',
            }),
            defineField({
              name: 'description',
              title: 'Description',
              type: 'text',
              description: 'Description of the certificate',
            }),
            defineField({
              name: 'image',
              title: 'Image',
              type: 'image',
              description: 'Image for the certificate',
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
      description: 'List of certificates associated with the hero',
    }),
    // for read more
    defineField({
      name: 'readmore',
      title: 'Read More',
      type: 'array',
      of: [
        {
          type: 'document',
          name: 'moreblogs',
          title: 'More Blogs',
          fields: [
            defineField({
              name: 'url',
              title: 'URL',
              type: 'url',
              description: 'URL for the blog',
            }),
            defineField({
              name: 'title',
              title: 'Title',
              type: 'string',
              description: 'Title of the blog',
            }),
            defineField({
              name: 'description',
              title: 'Description',
              type: 'text',
              description: 'Description of the blog content',
            }),
            defineField({
              name: 'image',
              title: 'Image',
              type: 'image',
              description: 'Image for the blog',
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
      description: 'List of read more blogs associated with the hero',
    }),
  ],
};

export default hero;
