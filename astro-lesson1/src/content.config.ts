import { defineCollection, z, type CollectionEntry } from "astro:content";

const postCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    author: z.string(),
    categories: z.array(z.string()),
    date: z.string(),
    featured: z.boolean(),
    image: z.string(),
  }),
});

const articlesCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    author: z.string(),
    date: z.string(),
    featured: z.boolean(),
    image: z.string(),
  }),
});

export const collections = {
  posts: postCollection,
  articles: articlesCollection,
};

// export type Post = CollectionEntry<"posts">;
