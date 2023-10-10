import { z, defineCollection, reference } from "astro:content";
const pages = defineCollection({
  type: "content",
  schema: z
    .object({
      flow: z
        .array(
          z.object({
            row: reference("rows"),
            sections: z
              .array(
                z
                  .object({
                    component: reference("sections"),
                  })
                  .catchall(z.any())
              )
              .optional(),
          })
        )
        .optional(),
    })
    .catchall(z.any())
    .optional(),
});

const rows = defineCollection({
  type: "content",
  schema: z.object({
    path: z.string(),
  }),
});

const sections = defineCollection({
  type: "content",
  schema: z.object({
    path: z.string(),
  }),
});

const data = defineCollection({
  type: "data",
  schema: z.any(),
});

export const collections = {
  pages,
  rows,
  sections,
  data,
};
