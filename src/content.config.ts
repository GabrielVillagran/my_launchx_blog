import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const posts = defineCollection({
  loader: glob({ base: './src/content/posts', pattern: '**/*.md' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    published: z.coerce.date(),
    revised: z.coerce.date().optional(),
    category: z.string(),
    readingMinutes: z.number().int().positive(),
    featured: z.boolean().default(false),
  }),
});

export const collections = { posts };
