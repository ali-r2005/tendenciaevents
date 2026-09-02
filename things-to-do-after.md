# Things to Do After

This content migration currently covers only the 8 core pages (home, about-us, services + 5 service sub-pages, get-a-quote). Two categories were intentionally deferred until after these core pages are enhanced and optimized:

## 1. Blog Posts

The live site has an active blog at `/blog/` with ongoing posts (e.g. "What If an AI Assistant Could Guide Your Team During…", "Canada Summer Party", "A Breath of Freedom at Dakhla Dune", "Villa Soraya"). These were not migrated yet.

**How we'll do it:**
- Pull the full post list from `post-sitemap.xml`.
- Fetch each post's content (title, body, publish date, author, category/tags, featured image reference).
- Create one markdown file per post under `content/blog/<slug>/page.md`, matching the future Next.js route (e.g. `/blog/villa-soraya-rabat`).
- Add a `content/blog/page.md` for the blog index/listing page itself.
- Apply the same keyword/SEO enhancement pass used on the core pages once the process is validated there.

## 2. Legal Pages

`Terms and Conditions` (`/terms-and-conditions/`) and `Privacy Policy` (`/privacy-policy/`) were skipped since they aren't SEO/keyword targets and don't need content enhancement — just a straight copy.

**How we'll do it:**
- Copy the verbatim text as-is into `content/terms-and-conditions/page.md` and `content/privacy-policy/page.md`.
- No rewriting/optimization needed for these — legal text should stay accurate to the original, not be "SEO enhanced."

## Order of operations

1. Finish enhancing/optimizing the 8 core pages already in `content/` (current step).
2. Migrate + optimize blog posts (same pattern as core pages).
3. Copy over the two legal pages as-is.
4. Only then move to the actual Next.js build/migration.
