// schemas/teamPage.js

import {defineField, defineType} from 'sanity'

export default {
  name: 'teamPage',
  title: 'Team Page',
  type: 'document',
  fields: [
    defineField({
      name: 'primary_header',
      title: 'Main Header',
      type: 'array',
      of: header.of, // Reuse the same header configuration
    }),
    defineField({
      name: 'image',
      title: 'Team Image',
      type: 'image',
    }),
    defineField({
      name: 'secondary_header',
      title: 'Contact Header',
      type: 'array',
      of: header.of, // Reuse the same header configuration
    }),{
      name: 'hiring',
      title: 'Hiring?',
      type: 'boolean',
    },
  ],
}
