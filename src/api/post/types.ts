import { z } from 'zod';

export const post = z.object({
    id: z.string(),
    title: z.string(),
    content: z.string(),
});

export type Post = z.infer<typeof post>;
