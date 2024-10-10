// structure.js

export const structure = (S) =>
  S.list()
    .title('Base')
    .items([
      S.listItem()
        .title('Site Settings')
        .child(
          S.document().title('Site Settings').schemaType('siteSettings').documentId('siteSettings'),
        ),
      ...S.documentTypeListItems().filter(
        (listItem) => !['siteSettings'].includes(listItem.getId()),
      ),
    ])
