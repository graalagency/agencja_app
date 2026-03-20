import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { TitleAuthorCreateManyInputObjectSchema as TitleAuthorCreateManyInputObjectSchema } from './objects/TitleAuthorCreateManyInput.schema';

export const TitleAuthorCreateManySchema: z.ZodType<Prisma.TitleAuthorCreateManyArgs> = z.object({ data: z.union([ TitleAuthorCreateManyInputObjectSchema, z.array(TitleAuthorCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.TitleAuthorCreateManyArgs>;

export const TitleAuthorCreateManyZodSchema = z.object({ data: z.union([ TitleAuthorCreateManyInputObjectSchema, z.array(TitleAuthorCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();