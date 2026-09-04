@AGENTS.md

# Content Synchronization Rule

**Content Authority:** `content/[?]/page.md` is the single source of truth for all pages content.

**Sync Requirement:** Whenever you modify any content (copy, text, data), you MUST update all three locations in this order:
1. **content/[?]/page.md** — Update the markdown source first
2. **i18n/en.ts** — Sync the dictionary with updated content (same text, matching structure)
3. **src/app/page.tsx** — If structure changes require new fields, update component references

**Why:** This ensures content stays consistent across the source, the i18n layer, and the rendered page. Future language files (es.ts, fr.ts) will draw from the same i18n structure, so i18n/en.ts must always match content/page.md exactly.

**How to apply:** When you see a request like "change X in the content" or "update the Y section," treat it as a mandate to update all three files. Verify sync by spot-checking that the same text appears in all three locations before marking the task complete.
