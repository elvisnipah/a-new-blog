import { glob } from "astro/loaders";
import { z, defineCollection } from "astro:content";

const blogCollection = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    tags: z.array(z.string()),
    description: z.string(),
    publishDate: z.string().transform((str) => new Date(str)),
    recommendations: z.array(z.string()).optional(),
  }),
});

export const collections = {
  blog: blogCollection,
};
