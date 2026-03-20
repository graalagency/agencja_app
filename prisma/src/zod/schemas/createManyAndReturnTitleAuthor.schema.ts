import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { TitleAuthorSelectObjectSchema as TitleAuthorSelectObjectSchema } from './objects/TitleAuthorSelect.schema';
import { TitleAuthorCreateManyInputObjectSchema as TitleAuthorCreateManyInputObjectSchema } from './objects/TitleAuthorCreateManyInput.schema';

export const TitleAuthorCreateManyAndReturnSchema: z.ZodType<Prisma.TitleAuthorCreateManyAndReturnArgs> = z.object({ select: TitleAuthorSelectObjectSchema.optional(), data: z.union([ TitleAuthorCreateManyInputObjectSchema, z.array(TitleAuthorCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.TitleAuthorCreateManyAndReturnArgs>;

export const TitleAuthorCreateManyAndReturnZodSchema = z.object({ select: TitleAuthorSelectObjectSchema.optional(), data: z.union([ TitleAuthorCreateManyInputObjectSchema, z.array(TitleAuthorCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();