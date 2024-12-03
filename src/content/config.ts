import { z, defineCollection } from 'astro:content';
import { object } from 'astro:schema';

const contacts = defineCollection({
  type: 'content',
  schema: ({ image }) =>
    z.object({
      id: z.number(),
      name: z.string(),
      title: z.string().optional(),
      profile: z.string().optional(),
      email: z.string().email().optional(),
      phone: z.string().optional(),
      avatar: image().optional(),
      social: z
        .array(
          z.object({
            channel: z.string(),
            url: z.string().url(),
          })
        )
        .optional(),
    }),
});

export const collections = { contacts };
