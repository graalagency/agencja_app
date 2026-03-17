import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { DictCountryWhereInputObjectSchema as DictCountryWhereInputObjectSchema } from './objects/DictCountryWhereInput.schema';

export const DictCountryDeleteManySchema: z.ZodType<Prisma.DictCountryDeleteManyArgs> = z.object({ where: DictCountryWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.DictCountryDeleteManyArgs>;

export const DictCountryDeleteManyZodSchema = z.object({ where: DictCountryWhereInputObjectSchema.optional() }).strict();