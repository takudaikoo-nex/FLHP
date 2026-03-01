import { defineType, defineField } from "sanity";

export const post = defineType({
  name: "post",
  title: "コラム・セミナー記事",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "タイトル",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "slug",
      title: "スラッグ",
      type: "slug",
      options: { source: "title" },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "category",
      title: "カテゴリ",
      type: "string",
      options: {
        list: [
          { title: "セミナー報告", value: "seminar" },
          { title: "葬儀の豆知識", value: "knowledge" },
          { title: "代表日記", value: "diary" },
          { title: "お知らせ", value: "news" },
        ],
      },
    }),
    defineField({
      name: "publishedAt",
      title: "公開日",
      type: "date",
    }),
    defineField({
      name: "excerpt",
      title: "抜粋",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "mainImage",
      title: "メイン画像",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "body",
      title: "本文",
      type: "array",
      of: [
        { type: "block" },
        {
          type: "image",
          options: { hotspot: true },
        },
      ],
    }),
  ],
  orderings: [
    {
      title: "公開日（新しい順）",
      name: "publishedAtDesc",
      by: [{ field: "publishedAt", direction: "desc" }],
    },
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "category",
      media: "mainImage",
    },
  },
});
