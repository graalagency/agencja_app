import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { TitleAuthorUpdateManyMutationInputObjectSchema as TitleAuthorUpdateManyMutationInputObjectSchema } from './objects/TitleAuthorUpdateManyMutationInput.schema';
import { TitleAuthorWhereInputObjectSchema as TitleAuthorWhereInputObjectSchema } from './objects/TitleAuthorWhereInput.schema';

export const TitleAuthorUpdateManySchema: z.ZodType<Prisma.TitleAuthorUpdateManyArgs> = z.object({ data: TitleAuthorUpdateManyMutationInputObjectSchema, where: TitleAuthorWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.TitleAuthorUpdateManyArgs>;

export const TitleAuthorUpdateManyZodSchema = z.object({ data: TitleAuthorUpdateManyMutationInputObjectSchema, where: TitleAuthorWhereInputObjectSchema.optional() }).strict();