import { defineType, defineField } from "sanity";

export const facility = defineType({
  name: "facility",
  title: "斎場・火葬場",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "施設名",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "slug",
      title: "スラッグ",
      type: "slug",
      options: { source: "name" },
    }),
    defineField({
      name: "area",
      title: "エリア",
      type: "string",
      options: {
        list: [
          { title: "湘南エリア", value: "shonan" },
          { title: "横浜市", value: "yokohama" },
          { title: "川崎市", value: "kawasaki" },
          { title: "県央・県西", value: "kennou" },
        ],
      },
    }),
    defineField({
      name: "scale",
      title: "規模",
      type: "string",
      options: {
        list: [
          { title: "S（小規模）", value: "s" },
          { title: "M（中規模）", value: "m" },
          { title: "L（大規模）", value: "l" },
        ],
      },
    }),
    defineField({
      name: "image",
      title: "施設写真",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "address",
      title: "住所",
      type: "string",
    }),
    defineField({
      name: "tel",
      title: "電話番号",
      type: "string",
    }),
    defineField({
      name: "priceLocal",
      title: "火葬料（市内）",
      type: "string",
    }),
    defineField({
      name: "priceOutside",
      title: "火葬料（市外）",
      type: "string",
    }),
    defineField({
      name: "hallFee",
      title: "式場料",
      type: "string",
    }),
    defineField({
      name: "closedDays",
      title: "休場日",
      type: "string",
    }),
    defineField({
      name: "features",
      title: "特徴タグ",
      type: "array",
      of: [{ type: "string" }],
      options: {
        layout: "tags",
      },
    }),
    defineField({
      name: "isOwn",
      title: "自社斎場",
      type: "boolean",
      initialValue: false,
    }),
  ],
  preview: {
    select: { title: "name", subtitle: "area" },
  },
});
