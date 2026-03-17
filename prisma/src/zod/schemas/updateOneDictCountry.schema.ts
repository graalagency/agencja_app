import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { DictCountrySelectObjectSchema as DictCountrySelectObjectSchema } from './objects/DictCountrySelect.schema';
import { DictCountryUpdateInputObjectSchema as DictCountryUpdateInputObjectSchema } from './objects/DictCountryUpdateInput.schema';
import { DictCountryUncheckedUpdateInputObjectSchema as DictCountryUncheckedUpdateInputObjectSchema } from './objects/DictCountryUncheckedUpdateInput.schema';
import { DictCountryWhereUniqueInputObjectSchema as DictCountryWhereUniqueInputObjectSchema } from './objects/DictCountryWhereUniqueInput.schema';

export const DictCountryUpdateOneSchema: z.ZodType<Prisma.DictCountryUpdateArgs> = z.object({ select: DictCountrySelectObjectSchema.optional(),  data: z.union([DictCountryUpdateInputObjectSchema, DictCountryUncheckedUpdateInputObjectSchema]), where: DictCountryWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.DictCountryUpdateArgs>;

export const DictCountryUpdateOneZodSchema = z.object({ select: DictCountrySelectObjectSchema.optional(),  data: z.union([DictCountryUpdateInputObjectSchema, DictCountryUncheckedUpdateInputObjectSchema]), where: DictCountryWhereUniqueInputObjectSchema }).strict();