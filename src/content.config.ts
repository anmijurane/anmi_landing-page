import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const technologies = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/technologies' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
  }),
});

export const collections = {
  technologies,
};
