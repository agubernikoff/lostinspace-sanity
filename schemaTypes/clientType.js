import {defineField, defineType} from 'sanity'

export const clientType = defineType({
  name: 'client',
  title: 'Client',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
    }),
    defineField({
      name: 'rank',
      type: 'number',
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
    }),
    defineField({
      name: 'bio',
      type: 'array',
      of: [{type: 'block'}],
    }),
  ],
})
