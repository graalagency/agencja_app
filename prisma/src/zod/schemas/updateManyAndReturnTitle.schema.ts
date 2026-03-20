import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { TitleSelectObjectSchema as TitleSelectObjectSchema } from './objects/TitleSelect.schema';
import { TitleUpdateManyMutationInputObjectSchema as TitleUpdateManyMutationInputObjectSchema } from './objects/TitleUpdateManyMutationInput.schema';
import { TitleWhereInputObjectSchema as TitleWhereInputObjectSchema } from './objects/TitleWhereInput.schema';

export const TitleUpdateManyAndReturnSchema: z.ZodType<Prisma.TitleUpdateManyAndReturnArgs> = z.object({ select: TitleSelectObjectSchema.optional(), data: TitleUpdateManyMutationInputObjectSchema, where: TitleWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.TitleUpdateManyAndReturnArgs>;

export const TitleUpdateManyAndReturnZodSchema = z.object({ select: TitleSelectObjectSchema.optional(), data: TitleUpdateManyMutationInputObjectSchema, where: TitleWhereInputObjectSchema.optional() }).strict();