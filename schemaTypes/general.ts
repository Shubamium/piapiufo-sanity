import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'general',
  type: 'document',
  fields: [
    // Define your fields here
    defineField({
      name: 'preset',
      title: 'Preset',
      description: `Set as 'main' to use this preset`,
      type: 'string',
    }),
    defineField({
      name: 'code',
      title: 'Sponsor Code',
      type: 'string',
    }),
    defineField({
      name: 'stats',
      type: 'object',
      fields: [
        defineField({
          name: 'youtube',
          type: 'string',
        }),
        defineField({
          name: 'twitch',
          type: 'string',
        }),
        defineField({
          name: 'tiktok',
          type: 'string',
        }),
      ],
    }),
  ],
})
