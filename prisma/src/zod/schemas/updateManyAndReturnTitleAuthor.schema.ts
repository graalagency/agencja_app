import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { TitleAuthorSelectObjectSchema as TitleAuthorSelectObjectSchema } from './objects/TitleAuthorSelect.schema';
import { TitleAuthorUpdateManyMutationInputObjectSchema as TitleAuthorUpdateManyMutationInputObjectSchema } from './objects/TitleAuthorUpdateManyMutationInput.schema';
import { TitleAuthorWhereInputObjectSchema as TitleAuthorWhereInputObjectSchema } from './objects/TitleAuthorWhereInput.schema';

export const TitleAuthorUpdateManyAndReturnSchema: z.ZodType<Prisma.TitleAuthorUpdateManyAndReturnArgs> = z.object({ select: TitleAuthorSelectObjectSchema.optional(), data: TitleAuthorUpdateManyMutationInputObjectSchema, where: TitleAuthorWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.TitleAuthorUpdateManyAndReturnArgs>;

export const TitleAuthorUpdateManyAndReturnZodSchema = z.object({ select: TitleAuthorSelectObjectSchema.optional(), data: TitleAuthorUpdateManyMutationInputObjectSchema, where: TitleAuthorWhereInputObjectSchema.optional() }).strict();