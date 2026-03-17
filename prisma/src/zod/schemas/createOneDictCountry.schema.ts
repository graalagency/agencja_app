import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { DictCountrySelectObjectSchema as DictCountrySelectObjectSchema } from './objects/DictCountrySelect.schema';
import { DictCountryCreateInputObjectSchema as DictCountryCreateInputObjectSchema } from './objects/DictCountryCreateInput.schema';
import { DictCountryUncheckedCreateInputObjectSchema as DictCountryUncheckedCreateInputObjectSchema } from './objects/DictCountryUncheckedCreateInput.schema';

export const DictCountryCreateOneSchema: z.ZodType<Prisma.DictCountryCreateArgs> = z.object({ select: DictCountrySelectObjectSchema.optional(),  data: z.union([DictCountryCreateInputObjectSchema, DictCountryUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.DictCountryCreateArgs>;

export const DictCountryCreateOneZodSchema = z.object({ select: DictCountrySelectObjectSchema.optional(),  data: z.union([DictCountryCreateInputObjectSchema, DictCountryUncheckedCreateInputObjectSchema]) }).strict();