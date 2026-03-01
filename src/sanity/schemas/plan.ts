import { defineType, defineField } from "sanity";

export const plan = defineType({
  name: "plan",
  title: "葬儀プラン",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "プラン名",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "slug",
      title: "スラッグ",
      type: "slug",
      options: { source: "title" },
    }),
    defineField({
      name: "planNumber",
      title: "プラン番号",
      type: "number",
    }),
    defineField({
      name: "priceFrom",
      title: "価格（万円台〜）",
      type: "number",
    }),
    defineField({
      name: "summary",
      title: "概要",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "image",
      title: "画像",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "includes",
      title: "含まれるもの",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "body",
      title: "詳細説明",
      type: "array",
      of: [{ type: "block" }, { type: "image" }],
    }),
  ],
  orderings: [
    {
      title: "プラン番号順",
      name: "planNumberAsc",
      by: [{ field: "planNumber", direction: "asc" }],
    },
  ],
});
