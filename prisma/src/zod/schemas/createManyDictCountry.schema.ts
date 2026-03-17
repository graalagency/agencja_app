import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { DictCountryCreateManyInputObjectSchema as DictCountryCreateManyInputObjectSchema } from './objects/DictCountryCreateManyInput.schema';

export const DictCountryCreateManySchema: z.ZodType<Prisma.DictCountryCreateManyArgs> = z.object({ data: z.union([ DictCountryCreateManyInputObjectSchema, z.array(DictCountryCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.DictCountryCreateManyArgs>;

export const DictCountryCreateManyZodSchema = z.object({ data: z.union([ DictCountryCreateManyInputObjectSchema, z.array(DictCountryCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();