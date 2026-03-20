import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { TitleSelectObjectSchema as TitleSelectObjectSchema } from './objects/TitleSelect.schema';
import { TitleIncludeObjectSchema as TitleIncludeObjectSchema } from './objects/TitleInclude.schema';
import { TitleWhereUniqueInputObjectSchema as TitleWhereUniqueInputObjectSchema } from './objects/TitleWhereUniqueInput.schema';
import { TitleCreateInputObjectSchema as TitleCreateInputObjectSchema } from './objects/TitleCreateInput.schema';
import { TitleUncheckedCreateInputObjectSchema as TitleUncheckedCreateInputObjectSchema } from './objects/TitleUncheckedCreateInput.schema';
import { TitleUpdateInputObjectSchema as TitleUpdateInputObjectSchema } from './objects/TitleUpdateInput.schema';
import { TitleUncheckedUpdateInputObjectSchema as TitleUncheckedUpdateInputObjectSchema } from './objects/TitleUncheckedUpdateInput.schema';

export const TitleUpsertOneSchema: z.ZodType<Prisma.TitleUpsertArgs> = z.object({ select: TitleSelectObjectSchema.optional(), include: TitleIncludeObjectSchema.optional(), where: TitleWhereUniqueInputObjectSchema, create: z.union([ TitleCreateInputObjectSchema, TitleUncheckedCreateInputObjectSchema ]), update: z.union([ TitleUpdateInputObjectSchema, TitleUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.TitleUpsertArgs>;

export const TitleUpsertOneZodSchema = z.object({ select: TitleSelectObjectSchema.optional(), include: TitleIncludeObjectSchema.optional(), where: TitleWhereUniqueInputObjectSchema, create: z.union([ TitleCreateInputObjectSchema, TitleUncheckedCreateInputObjectSchema ]), update: z.union([ TitleUpdateInputObjectSchema, TitleUncheckedUpdateInputObjectSchema ]) }).strict();