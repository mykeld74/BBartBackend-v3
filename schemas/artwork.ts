import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'artwork',
  title: 'Artwork',
  type: 'document',
  initialValue: {
    sold: false,
  },
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'size',
      title: 'Size',
      type: 'string',
    }),
    defineField({
      name: 'mainImage',
      title: 'Main image',
      type: 'cloudinary.asset',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'series',
      title: 'Series',
      type: 'array',
      of: [{type: 'reference', to: {type: 'series'}}],
    }),
    defineField({
      name: 'imgTypes',
      title: 'Image Types',
      type: 'array',
      of: [{type: 'reference', to: {type: 'imageType'}}],
    }),

    defineField({
      name: 'price',
      title: 'Price',
      type: 'number',
    }),
    defineField({
      name: 'sold',
      title: 'Sold',
      type: 'boolean',
    }),
    defineField({
      name: 'originalDescription',
      title: 'Original Description',
      type: 'blockContent',
    }),
    defineField({
      name: 'printsDescription',
      title: 'Prints Description',
      type: 'blockContent',
    }),
    defineField({
      name: 'commissionDescription',
      title: 'Commission Description',
      type: 'blockContent',
    }),

    defineField({
      name: 'etsyLink',
      title: 'Etsy Link',
      type: 'url',
    }),
    defineField({
      name: 'order',
      title: 'Order',
      type: 'number',
    }),
  ],

  orderings: [
    {
      title: 'Manual order',
      name: 'manualOrder',
      by: [{field: 'order', direction: 'asc'}],
    },
  ],

  preview: {
    select: {
      title: 'title',
    },
  },
})
