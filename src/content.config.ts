import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const titleSchema = z.string().max(60);

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

export const collections = { project };
