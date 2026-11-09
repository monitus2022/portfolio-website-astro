---
title: "Personal Knowledge Platform"
summary: "A static-first personal knowledge platform: this Astro profile, MkDocs study notes, and code cheatsheets, deployed on Cloudflare."
role: "Designer and developer"
timeframe: "2025–present"
status: "live"
featured: true
order: 2
stack:
  - Astro
  - TypeScript
  - Tailwind CSS
  - MkDocs
  - Cloudflare
highlights:
  - "Separate sites for the public profile, study notes, and code references."
  - "Static-first architecture that stays cheap and fast to host."
  - "Shared identity and navigation across the monitus.org subdomains."
---

## Overview

The monitus.org sites are a small publishing system rather than a single page. This profile is
built with Astro and Tailwind CSS, while the study notes and code cheatsheets use MkDocs. All of
them are deployed behind Cloudflare.

## Design goals

- Keep the public profile focused and fast.
- Let long-form notes and cheatsheets live in the tool that suits them.
- Avoid duplicating content between the profile and the reference sites.
- Make every site easy to update independently.

## What I built

- The Astro profile you are reading now.
- A shared information architecture across the subdomains.
- Static builds with search and feed support where they make sense.
