import type { CollectionEntry } from "astro:content";

export const sortPosts = (
  array: CollectionEntry<"blog">[]
): CollectionEntry<"blog">[] => {
  return array.sort(
    (a, b) => a.data.publishDate.getTime() - b.data.publishDate.getTime()
  );
};

// export default { sortPosts };
