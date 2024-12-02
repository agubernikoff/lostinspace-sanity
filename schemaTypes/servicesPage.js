// schemas/servicesPage.js

import {defineField, defineType} from 'sanity'
import header from './header'

export const TYPES = [
  {title: 'Editorial', value: 'editorial'},
  {title: 'Consulting', value: 'consulting'},
]

const bulletPoints = defineType({
  name: 'service',
  title: 'Service',
  type: 'document',
  fields: [defineField({name: 'service', type: 'string'})],
})

const service = defineType({
  name: 'service',
  title: 'Service',
  type: 'document',
  fields: [
    defineField({
      name: 'ourPlaceOrYours',
      type: 'string',
      options: {
        list: TYPES.map(({title, value}) => ({title, value})),
        layout: 'radio',
      },
    }),
    defineField({name: 'services', type: 'array', of: [bulletPoints]}),
    defineField({name: 'image', type: 'image'}),
  ],
})

const bottomSquare = defineType({
  name: 'bottomSquare',
  title: 'Bottom Square',
  type: 'document',
  fields: [
    defineField({name: 'title', type: 'string'}),
    defineField({name: 'description', type: 'string'}),
  ],
})

export default {
  name: 'servicesPage',
  title: 'Services Page',
  type: 'document',
  fields: [
    defineField({
      name: 'primary_header',
      title: 'Main Header',
      type: 'array',
      of: header.of, // Reuse the same header configuration
    }),
    defineField({
      name: 'services',
      title: 'Services',
      type: 'array',
      of: [service],
      validation: (Rule) =>
        Rule.custom((value, {document}) => {
          if (
            (value && value?.length > 2) ||
            value?.filter((v) => v.ourPlaceOrYours === 'editorial').length > 1 ||
            value?.filter((v) => v.ourPlaceOrYours === 'consulting').length > 1
          ) {
            return 'Please only create 1 service of type "editorial" and 1 of type "consulting"'
          }
          return true
        }),
    }),
    defineField({
      name: 'secondary_header',
      title: 'Contact Header',
      type: 'array',
      of: header.of, // Reuse the same header configuration
    }),
    defineField({
      name: 'subheader',
      title: 'Bottom Section Subheader',
      type: 'string',
    }),
    defineField({
      name: 'bottomSquares',
      title: 'Bottom Squares',
      type: 'array',
      of: [bottomSquare],
      validation: (Rule) =>
        Rule.custom((value, {document}) => {
          if (value && value?.length > 6) {
            return 'Limit to 6"'
          }
          return true
        }),
    }),
  ],
}
