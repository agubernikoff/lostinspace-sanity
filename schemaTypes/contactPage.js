// schemas/aboutPage.js

import {defineField, defineType} from 'sanity'
import header from './header'

const aboutBullets = defineType({
  name: 'aboutBullets',
  title: 'About Bullets',
  type: 'document',
  fields: [
    defineField({name: 'title', type: 'string'}),
    defineField({name: 'description', type: 'string'}),
  ],
})

export default {
  name: 'contactPage',
  title: 'Contact Page',
  type: 'document',
  fields: [
    defineField({
      name: 'primary_header',
      title: 'Header',
      type: 'array',
      of: header.of, // Reuse the same header configuration
    }),
  ],
}
