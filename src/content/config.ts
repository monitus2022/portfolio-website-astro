import { defineCollection, z } from "astro:content";

const noteCollection = defineCollection({
	type: "content",
	schema: z.object({
		title: z.string(),
		description: z.string().optional(),
		publishDate: z.date(),
		category: z.string().optional(),
		chapter: z.number().optional(),
	}),
});

export const collections = {
	note: noteCollection,
};
