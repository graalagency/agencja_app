import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { PublisherSelectObjectSchema as PublisherSelectObjectSchema } from './objects/PublisherSelect.schema';
import { PublisherIncludeObjectSchema as PublisherIncludeObjectSchema } from './objects/PublisherInclude.schema';
import { PublisherUpdateInputObjectSchema as PublisherUpdateInputObjectSchema } from './objects/PublisherUpdateInput.schema';
import { PublisherUncheckedUpdateInputObjectSchema as PublisherUncheckedUpdateInputObjectSchema } from './objects/PublisherUncheckedUpdateInput.schema';
import { PublisherWhereUniqueInputObjectSchema as PublisherWhereUniqueInputObjectSchema } from './objects/PublisherWhereUniqueInput.schema';

export const PublisherUpdateOneSchema: z.ZodType<Prisma.PublisherUpdateArgs> = z.object({ select: PublisherSelectObjectSchema.optional(), include: PublisherIncludeObjectSchema.optional(), data: z.union([PublisherUpdateInputObjectSchema, PublisherUncheckedUpdateInputObjectSchema]), where: PublisherWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.PublisherUpdateArgs>;

export const PublisherUpdateOneZodSchema = z.object({ select: PublisherSelectObjectSchema.optional(), include: PublisherIncludeObjectSchema.optional(), data: z.union([PublisherUpdateInputObjectSchema, PublisherUncheckedUpdateInputObjectSchema]), where: PublisherWhereUniqueInputObjectSchema }).strict();