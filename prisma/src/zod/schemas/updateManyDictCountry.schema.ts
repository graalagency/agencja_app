import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { DictCountryUpdateManyMutationInputObjectSchema as DictCountryUpdateManyMutationInputObjectSchema } from './objects/DictCountryUpdateManyMutationInput.schema';
import { DictCountryWhereInputObjectSchema as DictCountryWhereInputObjectSchema } from './objects/DictCountryWhereInput.schema';

export const DictCountryUpdateManySchema: z.ZodType<Prisma.DictCountryUpdateManyArgs> = z.object({ data: DictCountryUpdateManyMutationInputObjectSchema, where: DictCountryWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.DictCountryUpdateManyArgs>;

export const DictCountryUpdateManyZodSchema = z.object({ data: DictCountryUpdateManyMutationInputObjectSchema, where: DictCountryWhereInputObjectSchema.optional() }).strict();