import * as z from 'zod';
import { RoleSchema } from '../../enums/Role.schema';
// prettier-ignore
export const UserInputSchema = z.object({
    id: z.number().int(),
    name: z.string().optional().nullable(),
    email: z.string(),
    passwordHash: z.string(),
    role: RoleSchema,
    permissions: z.unknown().optional().nullable(),
    image: z.string().optional().nullable(),
    createdAt: z.date(),
    updatedAt: z.date(),
    locale: z.string(),
    dashboardConfig: z.unknown().optional().nullable()
}).strict();

export type UserInputType = z.infer<typeof UserInputSchema>;
