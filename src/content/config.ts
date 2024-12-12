import { z, defineCollection } from "astro:content";

const blogCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    tags: z.array(z.string()),
    description: z.string(),
    publishDate: z.string().transform((str) => new Date(str)),
    recommendations: z.array(z.string()).optional()
  }),
});

export const collections = {
  blog: blogCollection,
};
