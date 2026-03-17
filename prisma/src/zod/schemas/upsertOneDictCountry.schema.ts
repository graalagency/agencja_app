import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { DictCountrySelectObjectSchema as DictCountrySelectObjectSchema } from './objects/DictCountrySelect.schema';
import { DictCountryWhereUniqueInputObjectSchema as DictCountryWhereUniqueInputObjectSchema } from './objects/DictCountryWhereUniqueInput.schema';
import { DictCountryCreateInputObjectSchema as DictCountryCreateInputObjectSchema } from './objects/DictCountryCreateInput.schema';
import { DictCountryUncheckedCreateInputObjectSchema as DictCountryUncheckedCreateInputObjectSchema } from './objects/DictCountryUncheckedCreateInput.schema';
import { DictCountryUpdateInputObjectSchema as DictCountryUpdateInputObjectSchema } from './objects/DictCountryUpdateInput.schema';
import { DictCountryUncheckedUpdateInputObjectSchema as DictCountryUncheckedUpdateInputObjectSchema } from './objects/DictCountryUncheckedUpdateInput.schema';

export const DictCountryUpsertOneSchema: z.ZodType<Prisma.DictCountryUpsertArgs> = z.object({ select: DictCountrySelectObjectSchema.optional(),  where: DictCountryWhereUniqueInputObjectSchema, create: z.union([ DictCountryCreateInputObjectSchema, DictCountryUncheckedCreateInputObjectSchema ]), update: z.union([ DictCountryUpdateInputObjectSchema, DictCountryUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.DictCountryUpsertArgs>;

export const DictCountryUpsertOneZodSchema = z.object({ select: DictCountrySelectObjectSchema.optional(),  where: DictCountryWhereUniqueInputObjectSchema, create: z.union([ DictCountryCreateInputObjectSchema, DictCountryUncheckedCreateInputObjectSchema ]), update: z.union([ DictCountryUpdateInputObjectSchema, DictCountryUncheckedUpdateInputObjectSchema ]) }).strict();