import * as z from 'zod';
export const AuthorFindFirstResultSchema = z.nullable(z.object({
  id: z.number().int(),
  sourceId: z.number().int().optional(),
  firstName: z.string(),
  middleName: z.string().optional(),
  lastName: z.string(),
  suffix: z.string().optional(),
  penName: z.string().optional(),
  description: z.string().optional(),
  createdAt: z.date(),
  updatedAt: z.date(),
  photos: z.unknown().optional(),
  personalEmail: z.string().optional(),
  workEmail: z.string().optional(),
  clientId: z.number().int().optional(),
  Client: z.unknown().optional(),
  TitleAuthors: z.array(z.unknown())
}));