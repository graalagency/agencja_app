import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { TitleWhereInputObjectSchema as TitleWhereInputObjectSchema } from './objects/TitleWhereInput.schema';

export const TitleDeleteManySchema: z.ZodType<Prisma.TitleDeleteManyArgs> = z.object({ where: TitleWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.TitleDeleteManyArgs>;

export const TitleDeleteManyZodSchema = z.object({ where: TitleWhereInputObjectSchema.optional() }).strict();