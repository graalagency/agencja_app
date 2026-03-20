import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { TitleAuthorWhereInputObjectSchema as TitleAuthorWhereInputObjectSchema } from './objects/TitleAuthorWhereInput.schema';

export const TitleAuthorDeleteManySchema: z.ZodType<Prisma.TitleAuthorDeleteManyArgs> = z.object({ where: TitleAuthorWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.TitleAuthorDeleteManyArgs>;

export const TitleAuthorDeleteManyZodSchema = z.object({ where: TitleAuthorWhereInputObjectSchema.optional() }).strict();