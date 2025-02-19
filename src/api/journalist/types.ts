import { z } from 'zod';

export const journalistPostSchema = z.object({
    count: z.number(),
    next: z.string(),
    previous: z.string(),
    results: z.array(
        z.object({
            id: z.number(),
            title: z.string(),
            content: z.string(),
            author: z.string(),
            created_at: z.string(),
            updated_at: z.string(),
        }),
    ),
});

export type Post = z.infer<typeof journalistPostSchema>;
