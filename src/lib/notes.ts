import { getCollection, type CollectionEntry } from "astro:content";

type Note = CollectionEntry<"notes">;

export const notes = await getCollection("notes");

export const sortByCreated = (entries: readonly Note[]) => [...entries].sort(
  (a, b) => b.data.created.getTime() - a.data.created.getTime()
);

export const sortByModified = (entries: readonly Note[]) => [...entries].sort(
  (a, b) =>
    (b.data.modified ?? b.data.created).getTime()
    - (a.data.modified ?? a.data.created).getTime()
);
