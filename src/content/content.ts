import { getCollection } from "astro:content";

export const notes = await getCollection("notes");

export const sortByCreated = (entries) => entries.sort(
  (a, b) => b.data.created.getTime() - a.data.created.getTime()
);
export const sortByModified = (entries) => entries.sort(
  (a, b) => b.data.modified.getTime() - a.data.modified.getTime()
);

