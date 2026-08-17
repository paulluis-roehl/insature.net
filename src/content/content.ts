import { getCollection } from "astro:content";

export const notes = await getCollection("notes");

export const sortByCreated = (entries) => entries.sort(
  (a, b) => new Date(b.data.created).getTime() - new Date(a.data.created).getTime()
);
export const sortByModified = (entries) => entries.sort(
  (a, b) => new Date(b.data.modified).getTime() - new Date(a.data.modified).getTime()
);

