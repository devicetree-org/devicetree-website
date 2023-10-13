import { z, defineCollection, reference } from "astro:content";
const pages = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z
      .object({
        title: z.string().optional(),
        descripton: z.string().optional(),
        hero: z
          .object({
            title: z.string(),
            description: z.string().optional(),
            background_image: image().optional(),
            style: z.string().optional(),
            inner_image: z.string().optional(),
            buttons: z
              .array(
                z
                  .object({
                    title: z.string().optional(),
                    url: z.string().optional(),
                    class: z.string().optional(),
                  })
                  .optional()
              )
              .optional(),
          })
          .optional(),

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
