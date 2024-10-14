// structure.js

export const structure = (S) =>
  S.list()
    .title('Base')
    .items([
      S.listItem()
        .title('Team Page')
        .child(
          S.document().title('Team Page').schemaType('teamPage').documentId('teamPage'),
        ),
        S.listItem()
        .title('About Page')
        .child(
          S.document().title('About Page').schemaType('aboutPage').documentId('aboutPage'),
        ),
        S.listItem()
        .title('Services Page')
        .child(
          S.document().title('Services Page').schemaType('servicesPage').documentId('servicesPage'),
        ),S.listItem()
        .title('Social Links')
        .child(
          S.document().title('Social Links').schemaType('socialLinks').documentId('socialLinks'),
        ),
      ...S.documentTypeListItems().filter(
        (listItem) => !['teamPage', 'servicesPage', 'aboutPage', 'socialLinks'].includes(listItem.getId()),
      ),
    ])
