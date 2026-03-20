import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { TitleUpdateManyMutationInputObjectSchema as TitleUpdateManyMutationInputObjectSchema } from './objects/TitleUpdateManyMutationInput.schema';
import { TitleWhereInputObjectSchema as TitleWhereInputObjectSchema } from './objects/TitleWhereInput.schema';

export const TitleUpdateManySchema: z.ZodType<Prisma.TitleUpdateManyArgs> = z.object({ data: TitleUpdateManyMutationInputObjectSchema, where: TitleWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.TitleUpdateManyArgs>;

export const TitleUpdateManyZodSchema = z.object({ data: TitleUpdateManyMutationInputObjectSchema, where: TitleWhereInputObjectSchema.optional() }).strict();