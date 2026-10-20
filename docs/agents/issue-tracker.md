# Issue tracker: git-bug

Issues and specs live in this repository's git-bug store, separate from tracked files.

## Operations

Use the installed `git bug` CLI. Consult its command-specific `--help`
before mutations; command names differ between versions.

The installed CLI currently exposes:
- List/search tickets: `git bug bug`, with query or filter flags.
- Read a ticket: `git bug bug show`.
- Create a ticket: `git bug bug new`.
- Read/add comments: `git bug bug comment`.
- Read/change labels: `git bug bug label`.
- Read/change status: `git bug bug status`.

Pass an explicit ticket ID rather than relying on implicit selection.
Use git-bug IDs when referencing tickets.

When a skill says "publish to the issue tracker", create a git-bug ticket.
When it says "fetch the relevant ticket", read the ticket and its comments.
Store specs in ticket bodies and follow-up discussion in comments.
Use `triage-labels.md` for triage label names.

## Synchronization

Work locally by default. Push, pull, or configure bridges only when requested.
If an identity or other prerequisite is missing, ask the user before configuring it.

## Wayfinding

Represent a map and its child tickets as separate git-bug tickets.
Record child IDs in the map, and map/blocker IDs in child ticket bodies
or comments. Record claims and resolutions explicitly in comments;
close resolved children. The frontier is open, unblocked, unclaimed
children, ordered by creation.
