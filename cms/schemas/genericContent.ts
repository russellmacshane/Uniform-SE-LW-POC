export default {
  name: 'genericContent',
  type: 'document',
  title: 'Generic content',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
    },
    {
      name: 'body',
      title: 'Body',
      type: 'text',
    },
    {
      name: 'ctaLink',
      title: 'CTA Link',
      type: 'url',
    },
    {
      name: 'ctaTitle',
      title: 'CTA Title',
      type: 'string',
    },
  ],
}
