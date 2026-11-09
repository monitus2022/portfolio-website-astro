import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const titleSchema = z.string().max(60);

const baseSchema = z.object({
	title: titleSchema,
});

const note = defineCollection({
	loader: glob({ base: "./src/content/note", pattern: "**/*.{md,mdx}" }),
	schema: baseSchema.extend({
		description: z.string().optional(),
		category: z.string().optional(),
		chapter: z.number().optional(),
		publishDate: z
			.string()
			.datetime({ offset: true }) // Ensures ISO 8601 format with offsets allowed (e.g. "2024-01-01T00:00:00Z" and "2024-01-01T00:00:00+02:00")
			.transform((val) => new Date(val)),
	}),
});

const project = defineCollection({
	loader: glob({ base: "./src/content/project", pattern: "**/*.md" }),
	schema: z.object({
		title: titleSchema,
		summary: z.string().max(200),
		role: z.string(),
		timeframe: z.string().optional(),
		status: z.enum(["live", "in-progress", "archived"]),
		featured: z.boolean().default(false),
		order: z.number().default(99),
		stack: z.array(z.string()).default([]),
		highlights: z.array(z.string()).default([]),
		demoUrl: z.string().url().optional(),
		repoUrl: z.string().url().optional(),
		docsUrl: z.string().url().optional(),
	}),
});

export const collections = { note, project };
