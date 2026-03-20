import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { TitleAuthorSelectObjectSchema as TitleAuthorSelectObjectSchema } from './objects/TitleAuthorSelect.schema';
import { TitleAuthorIncludeObjectSchema as TitleAuthorIncludeObjectSchema } from './objects/TitleAuthorInclude.schema';
import { TitleAuthorCreateInputObjectSchema as TitleAuthorCreateInputObjectSchema } from './objects/TitleAuthorCreateInput.schema';
import { TitleAuthorUncheckedCreateInputObjectSchema as TitleAuthorUncheckedCreateInputObjectSchema } from './objects/TitleAuthorUncheckedCreateInput.schema';

export const TitleAuthorCreateOneSchema: z.ZodType<Prisma.TitleAuthorCreateArgs> = z.object({ select: TitleAuthorSelectObjectSchema.optional(), include: TitleAuthorIncludeObjectSchema.optional(), data: z.union([TitleAuthorCreateInputObjectSchema, TitleAuthorUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.TitleAuthorCreateArgs>;

export const TitleAuthorCreateOneZodSchema = z.object({ select: TitleAuthorSelectObjectSchema.optional(), include: TitleAuthorIncludeObjectSchema.optional(), data: z.union([TitleAuthorCreateInputObjectSchema, TitleAuthorUncheckedCreateInputObjectSchema]) }).strict();