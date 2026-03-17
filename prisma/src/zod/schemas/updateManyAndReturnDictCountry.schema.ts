import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { DictCountrySelectObjectSchema as DictCountrySelectObjectSchema } from './objects/DictCountrySelect.schema';
import { DictCountryUpdateManyMutationInputObjectSchema as DictCountryUpdateManyMutationInputObjectSchema } from './objects/DictCountryUpdateManyMutationInput.schema';
import { DictCountryWhereInputObjectSchema as DictCountryWhereInputObjectSchema } from './objects/DictCountryWhereInput.schema';

export const DictCountryUpdateManyAndReturnSchema: z.ZodType<Prisma.DictCountryUpdateManyAndReturnArgs> = z.object({ select: DictCountrySelectObjectSchema.optional(), data: DictCountryUpdateManyMutationInputObjectSchema, where: DictCountryWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.DictCountryUpdateManyAndReturnArgs>;

export const DictCountryUpdateManyAndReturnZodSchema = z.object({ select: DictCountrySelectObjectSchema.optional(), data: DictCountryUpdateManyMutationInputObjectSchema, where: DictCountryWhereInputObjectSchema.optional() }).strict();