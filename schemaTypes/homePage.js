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
    header,
  ],
}
