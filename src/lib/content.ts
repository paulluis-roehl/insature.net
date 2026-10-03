import { getCollection, type CollectionEntry } from "astro:content";

type Entry = CollectionEntry<"notes" | "output">;

export const notes = await getCollection("notes");
export const output = await getCollection("output");

export const sortByCreated = <T extends Entry>(entries: readonly T[]): T[] => [...entries].sort(
  (a, b) => b.data.created.getTime() - a.data.created.getTime()
);

export const sortByModified = <T extends Entry>(entries: readonly T[]): T[] => [...entries].sort(
  (a, b) =>
    (b.data.modified ?? b.data.created).getTime()
    - (a.data.modified ?? a.data.created).getTime()
);
