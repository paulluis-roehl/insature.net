import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const notesCollection = defineCollection({
  loader: glob({ base: "./src/content/notes", pattern: "**/*.{md,mdx}" }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    created: z.coerce.date(),
    modified: z.coerce.date().optional(),
  }),
});

// This key should match your collection directory name in "src/content"
export const collections = {
  notes: notesCollection
};
