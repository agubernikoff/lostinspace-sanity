// schemas/aboutPage.js

import {defineField, defineType} from 'sanity'

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
    name: 'aboutPage',
    title: 'About Page',
    type: 'document',
    fields: [
        defineField({
            name: 'aboutBulletsTopSection',
            title: 'About Bullets',
            type: 'array',
            of: [aboutBullets],
            // validation: (Rule) =>
            //   Rule.custom((value, {document}) => {
            //     if (value && value?.length > 6) {
            //       return 'Limit to 6"'
            //     }
            //     return true
            //   }),
          }),
          defineField({
            name: 'image',
            title: 'About Image',
            type: 'image',
          }),
          defineField({
            name: 'aboutBulletsBottomSection',
            title: 'About Bullets Bottom Section',
            type: 'array',
            of: [aboutBullets],
            // validation: (Rule) =>
            //   Rule.custom((value, {document}) => {
            //     if (value && value?.length > 6) {
            //       return 'Limit to 6"'
            //     }
            //     return true
            //   }),
          }),
    ],
  }
  