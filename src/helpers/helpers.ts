import type { CollectionEntry } from "astro:content";

export const sortPosts = (
  array: CollectionEntry<"blog">[]
): CollectionEntry<"blog">[] => {
  return array.sort(
    (a, b) => b.data.publishDate.getTime() - a.data.publishDate.getTime()
  );
};
