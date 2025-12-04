import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const technologies = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/technologies' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    heroImage: z.string().optional(),
    icon: z.string().optional(),
    category: z.enum([
      'Arquitectura Frontend & UI',
      'Core & Ecosistema Frontend',
      'Backend & Persistencia',
      'DevOps, Calidad & Herramientas',
    ]),
    color: z.string().optional(),
    isDraft: z.boolean().optional().default(false),
  }),
});

export const collections = {
  technologies,
};
