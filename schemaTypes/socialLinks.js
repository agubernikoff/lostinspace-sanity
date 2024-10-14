// schemas/socialLinks.js
export default {
    name: 'socialLinks',
    title: 'Social Links',
    type: 'document',
    fields: [
      {
        title: 'Youtube',
        name: 'youtube',
        type: 'url',
      },
      {
        title: 'LinkedIn',
        name: 'linkedin',
        type: 'url',
      },{
        title: 'Instagram',
        name: 'instagram',
        type: 'url',
      },{
        title: 'Twitter',
        name: 'twitter',
        type: 'url',
      }
    ],
  }
  