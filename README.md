# insature.net

A soon-to-be digital garden and personal blog.


## Deploying

- Local build server: `npm run dev`
- Build for deployment (not necessary for github pages): `npm run build`
- Preview deployed site: `npm run preview`

## Writing notes

Add a Markdown file to `src/content/notes/`. Its filename becomes its URL, so
`hello_world.md` is published at `/notes/hello_world/`.

```md
---
title: "Note title"
description: "A short summary used in listings and page metadata."
created: 2026-08-16
modified: 2026-08-16
---

Write the note in Markdown here.
```

Published notes can be sorted by date and appear on the notes page and home page.
