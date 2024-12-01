import {defineField, defineType} from 'sanity'
import header from './header'

export default {
  name: 'homePage',
  title: 'Home Page',
  type: 'document',
  fields: [
    defineField({
      name: 'image',
      title: 'Hero Image',
      type: 'image',
    }),
    defineField({
      name: 'header',
      title: 'Main Header',
      type: 'array',
      of: header.of, // Use the "of" from the imported header schema
    }),
    defineField({
      name: 'clients_header',
      title: 'Clients Header',
      type: 'array',
      of: header.of, // Reuse the same header configuration
    }),
    defineField({
      name: 'contact_header',
      title: 'Contact Header',
      type: 'array',
      of: header.of, // Reuse the same header configuration
    }),
  ],
}
