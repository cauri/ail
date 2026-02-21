import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const toolkit = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/toolkit' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    section: z.enum([
      'diagnostic',
      'reports',
      'consulting',
      'roadmaps',
      'reference',
      'guides',
      'metrics',
    ]),
    order: z.number(),
  }),
});

const training = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/training' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    order: z.number(),
    duration: z.string().optional(),
    prerequisites: z.string().optional(),
  }),
});

const research = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/research' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    order: z.number(),
  }),
});

export const collections = { toolkit, training, research };
