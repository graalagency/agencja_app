import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { TitleSelectObjectSchema as TitleSelectObjectSchema } from './objects/TitleSelect.schema';
import { TitleIncludeObjectSchema as TitleIncludeObjectSchema } from './objects/TitleInclude.schema';
import { TitleCreateInputObjectSchema as TitleCreateInputObjectSchema } from './objects/TitleCreateInput.schema';
import { TitleUncheckedCreateInputObjectSchema as TitleUncheckedCreateInputObjectSchema } from './objects/TitleUncheckedCreateInput.schema';

export const TitleCreateOneSchema: z.ZodType<Prisma.TitleCreateArgs> = z.object({ select: TitleSelectObjectSchema.optional(), include: TitleIncludeObjectSchema.optional(), data: z.union([TitleCreateInputObjectSchema, TitleUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.TitleCreateArgs>;

export const TitleCreateOneZodSchema = z.object({ select: TitleSelectObjectSchema.optional(), include: TitleIncludeObjectSchema.optional(), data: z.union([TitleCreateInputObjectSchema, TitleUncheckedCreateInputObjectSchema]) }).strict();