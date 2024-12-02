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
    defineField({
      name: 'width',
      type: 'number',
      description:
        'Width as a percentage of the containing element. 100 would set the image to the full width of the page minus the margins.',
    }),
  ],
})
