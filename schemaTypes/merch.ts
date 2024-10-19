import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'merch',
  title: 'Merch',
  type: 'document',

  fields: [
    // Define your fields here
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
    defineField({
      name: 'price',
      type: 'string',
    }),
    defineField({
      name: 'link',
      title: 'Link',
      description: 'Link to the product page',
      placeholder: 'https://site.com',
      type: 'url',
    }),
    defineField({
      name: 'image',
      title: 'Product Image',
      type: 'image',
    }),
  ],
})
