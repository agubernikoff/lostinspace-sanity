// schemas/partnersPage.js

import {defineField, defineType} from 'sanity'
import header from './header'

export default {
  name: 'partnersPage',
  title: 'Partners Page',
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
      title: 'Hero Image',
      type: 'image',
    }),
    defineField({
      name: 'secondary_header',
      title: 'Contact Header',
      type: 'array',
      of: header.of, // Reuse the same header configuration
    }),
  ],
}
