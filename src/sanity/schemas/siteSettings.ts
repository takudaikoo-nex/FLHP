import { defineType, defineField } from "sanity";

export const siteSettings = defineType({
  name: "siteSettings",
  title: "サイト設定",
  type: "document",
  fields: [
    defineField({
      name: "phone",
      title: "電話番号",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "phoneLabel",
      title: "電話ラベル",
      type: "string",
    }),
    defineField({
      name: "companyName",
      title: "会社名",
      type: "string",
    }),
    defineField({
      name: "address",
      title: "住所",
      type: "text",
      rows: 2,
    }),
    defineField({
      name: "ctaText",
      title: "CTA共通テキスト",
      type: "string",
    }),
    defineField({
      name: "ogImage",
      title: "OGP画像",
      type: "image",
    }),
  ],
  preview: {
    prepare: () => ({ title: "サイト設定" }),
  },
});
