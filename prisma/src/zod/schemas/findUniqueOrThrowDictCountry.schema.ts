import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { DictCountrySelectObjectSchema as DictCountrySelectObjectSchema } from './objects/DictCountrySelect.schema';
import { DictCountryWhereUniqueInputObjectSchema as DictCountryWhereUniqueInputObjectSchema } from './objects/DictCountryWhereUniqueInput.schema';

export const DictCountryFindUniqueOrThrowSchema: z.ZodType<Prisma.DictCountryFindUniqueOrThrowArgs> = z.object({ select: DictCountrySelectObjectSchema.optional(),  where: DictCountryWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.DictCountryFindUniqueOrThrowArgs>;

export const DictCountryFindUniqueOrThrowZodSchema = z.object({ select: DictCountrySelectObjectSchema.optional(),  where: DictCountryWhereUniqueInputObjectSchema }).strict();