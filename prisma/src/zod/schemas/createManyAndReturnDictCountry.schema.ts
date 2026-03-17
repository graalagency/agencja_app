import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { DictCountrySelectObjectSchema as DictCountrySelectObjectSchema } from './objects/DictCountrySelect.schema';
import { DictCountryCreateManyInputObjectSchema as DictCountryCreateManyInputObjectSchema } from './objects/DictCountryCreateManyInput.schema';

export const DictCountryCreateManyAndReturnSchema: z.ZodType<Prisma.DictCountryCreateManyAndReturnArgs> = z.object({ select: DictCountrySelectObjectSchema.optional(), data: z.union([ DictCountryCreateManyInputObjectSchema, z.array(DictCountryCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.DictCountryCreateManyAndReturnArgs>;

export const DictCountryCreateManyAndReturnZodSchema = z.object({ select: DictCountrySelectObjectSchema.optional(), data: z.union([ DictCountryCreateManyInputObjectSchema, z.array(DictCountryCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();