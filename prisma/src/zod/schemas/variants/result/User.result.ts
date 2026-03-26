import * as z from 'zod';
import { RoleSchema } from '../../enums/Role.schema';
// prettier-ignore
export const UserResultSchema = z.object({
    id: z.number().int(),
    name: z.string().nullable(),
    email: z.string(),
    passwordHash: z.string(),
    role: RoleSchema,
    permissions: z.unknown().nullable(),
    image: z.string().nullable(),
    createdAt: z.date(),
    updatedAt: z.date(),
    locale: z.string(),
    dashboardConfig: z.unknown().nullable()
}).strict();

export type UserResultType = z.infer<typeof UserResultSchema>;
