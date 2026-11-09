# monitus.org

Personal profile for Tommy Cheung, built with [Astro](https://astro.build) and Tailwind CSS.

The site is intentionally a public profile rather than a full résumé. It covers the work that is
safe to share publicly, and the detailed CV is sent on request.

## Pages

- `/` — introduction, selected projects, skills, and resource links
- `/projects/` — project index and case studies
- `/about/` — short bio, career snapshot, and skills
- `/contact/` — LinkedIn, GitHub, and a revealed email address
- `/notes/` — reading notes (secondary destination)

The `notes.monitus.org` and `code.monitus.org` sites are separate MkDocs deployments linked from
the footer and the home page.

## Commands

| Command | Action |
| :--- | :--- |
| `pnpm install` | Install dependencies |
| `pnpm dev` | Start the local dev server |
| `pnpm build` | Build the production site and Pagefind index |
| `pnpm preview` | Preview the production build |
| `pnpm check` | Run Astro type checks and Biome |
| `pnpm lint` | Format and apply safe Biome fixes |
| `pnpm generate:social` | Regenerate `public/social-card.png` |

## Content

- Profile copy lives in `src/pages/`.
- Project case studies live in `src/content/project/`.
- Reading notes live in `src/content/note/`.
- Site metadata and navigation live in `src/site.config.ts`.

To add a project, create a Markdown file in `src/content/project/` with the frontmatter fields
defined in `src/content.config.ts`.

## Privacy

Do not add phone numbers, home addresses, or a full CV PDF to `public/`. Files in `public/` are
served publicly and may be indexed even when they are not linked. The contact page uses a reveal
button for the email address to reduce basic scraping.
