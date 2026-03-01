import { defineType, defineField } from "sanity";

export const staff = defineType({
  name: "staff",
  title: "スタッフ",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "名前",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "role",
      title: "役職",
      type: "string",
    }),
    defineField({
      name: "photo",
      title: "写真",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "message",
      title: "メッセージ",
      type: "text",
      rows: 4,
    }),
    defineField({
      name: "order",
      title: "表示順",
      type: "number",
    }),
  ],
  orderings: [
    {
      title: "表示順",
      name: "orderAsc",
      by: [{ field: "order", direction: "asc" }],
    },
  ],
});
