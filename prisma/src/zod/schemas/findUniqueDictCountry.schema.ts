import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { DictCountrySelectObjectSchema as DictCountrySelectObjectSchema } from './objects/DictCountrySelect.schema';
import { DictCountryWhereUniqueInputObjectSchema as DictCountryWhereUniqueInputObjectSchema } from './objects/DictCountryWhereUniqueInput.schema';

export const DictCountryFindUniqueSchema: z.ZodType<Prisma.DictCountryFindUniqueArgs> = z.object({ select: DictCountrySelectObjectSchema.optional(),  where: DictCountryWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.DictCountryFindUniqueArgs>;

export const DictCountryFindUniqueZodSchema = z.object({ select: DictCountrySelectObjectSchema.optional(),  where: DictCountryWhereUniqueInputObjectSchema }).strict();