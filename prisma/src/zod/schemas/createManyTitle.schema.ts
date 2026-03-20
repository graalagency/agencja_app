import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { TitleCreateManyInputObjectSchema as TitleCreateManyInputObjectSchema } from './objects/TitleCreateManyInput.schema';

export const TitleCreateManySchema: z.ZodType<Prisma.TitleCreateManyArgs> = z.object({ data: z.union([ TitleCreateManyInputObjectSchema, z.array(TitleCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.TitleCreateManyArgs>;

export const TitleCreateManyZodSchema = z.object({ data: z.union([ TitleCreateManyInputObjectSchema, z.array(TitleCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();