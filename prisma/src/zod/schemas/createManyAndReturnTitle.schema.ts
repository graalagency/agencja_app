import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { TitleSelectObjectSchema as TitleSelectObjectSchema } from './objects/TitleSelect.schema';
import { TitleCreateManyInputObjectSchema as TitleCreateManyInputObjectSchema } from './objects/TitleCreateManyInput.schema';

export const TitleCreateManyAndReturnSchema: z.ZodType<Prisma.TitleCreateManyAndReturnArgs> = z.object({ select: TitleSelectObjectSchema.optional(), data: z.union([ TitleCreateManyInputObjectSchema, z.array(TitleCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.TitleCreateManyAndReturnArgs>;

export const TitleCreateManyAndReturnZodSchema = z.object({ select: TitleSelectObjectSchema.optional(), data: z.union([ TitleCreateManyInputObjectSchema, z.array(TitleCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();