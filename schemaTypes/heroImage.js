import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'heroImage',
  title: 'Image',
  type: 'object',
  fields: [
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
    }),
    defineField({name: 'width', type: 'number'}),
  ],
})
