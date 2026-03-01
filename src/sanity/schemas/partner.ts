import { defineType, defineField } from "sanity";

export const partner = defineType({
  name: "partner",
  title: "提携先",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "名称",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "field",
      title: "分野",
      type: "string",
      options: {
        list: [
          { title: "医療", value: "medical" },
          { title: "訪問看護", value: "nursing" },
          { title: "士業（法務）", value: "legal" },
          { title: "その他", value: "other" },
        ],
      },
    }),
    defineField({
      name: "logo",
      title: "ロゴ",
      type: "image",
    }),
    defineField({
      name: "description",
      title: "説明文",
      type: "text",
      rows: 3,
    }),
  ],
});
