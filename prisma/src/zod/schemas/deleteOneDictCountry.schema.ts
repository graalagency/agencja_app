import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { DictCountrySelectObjectSchema as DictCountrySelectObjectSchema } from './objects/DictCountrySelect.schema';
import { DictCountryWhereUniqueInputObjectSchema as DictCountryWhereUniqueInputObjectSchema } from './objects/DictCountryWhereUniqueInput.schema';

export const DictCountryDeleteOneSchema: z.ZodType<Prisma.DictCountryDeleteArgs> = z.object({ select: DictCountrySelectObjectSchema.optional(),  where: DictCountryWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.DictCountryDeleteArgs>;

export const DictCountryDeleteOneZodSchema = z.object({ select: DictCountrySelectObjectSchema.optional(),  where: DictCountryWhereUniqueInputObjectSchema }).strict();