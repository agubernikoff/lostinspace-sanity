// schemas/teamPage.js
export default {
  name: 'teamPage',
  title: 'Team Page',
  type: 'document',
  fields: [
    defineField({
      name: 'image',
      title: 'Team Image',
      type: 'image',
    }),{
      name: 'hiring',
      title: 'Hiring?',
      type: 'boolean',
    },
  ],
}
