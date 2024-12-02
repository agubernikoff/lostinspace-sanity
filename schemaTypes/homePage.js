import {defineField} from 'sanity'
import header from './header'

export default {
  name: 'homePage',
  title: 'Home Page',
  type: 'document',
  fields: [
    defineField({
      name: 'hero_image',
      title: 'Hero Image',
      type: 'heroImage',
    }),
    defineField({
      name: 'header',
      title: 'Main Header',
      type: 'array',
      of: header.of, // Use the "of" from the imported header schema
    }),
    defineField({
      name: 'subheader',
      title: 'Main Subheading',
      type: 'string',
    }),
    defineField({
      name: 'clients_header',
      title: 'Clients Header',
      type: 'array',
      of: header.of, // Reuse the same header configuration
    }),
    defineField({
      name: 'client_subheader',
      title: 'Clients Subheading',
      type: 'string',
    }),
    defineField({
      name: 'contact_header',
      title: 'Contact Header',
      type: 'array',
      of: header.of, // Reuse the same header configuration
    }),
    defineField({
      name: 'contact_subheader',
      title: 'Contact Subheading',
      type: 'string',
    }),
  ],
}
