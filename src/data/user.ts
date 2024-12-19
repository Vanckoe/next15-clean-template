import { z } from 'zod';

export const UserSchema = z.object({
    id: z.string(),
    role: z.string(),
    name: z.string(),
});

export type User = z.infer<typeof UserSchema>;
