import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { PublisherContactSelectObjectSchema as PublisherContactSelectObjectSchema } from './objects/PublisherContactSelect.schema';
import { PublisherContactIncludeObjectSchema as PublisherContactIncludeObjectSchema } from './objects/PublisherContactInclude.schema';
import { PublisherContactUpdateInputObjectSchema as PublisherContactUpdateInputObjectSchema } from './objects/PublisherContactUpdateInput.schema';
import { PublisherContactUncheckedUpdateInputObjectSchema as PublisherContactUncheckedUpdateInputObjectSchema } from './objects/PublisherContactUncheckedUpdateInput.schema';
import { PublisherContactWhereUniqueInputObjectSchema as PublisherContactWhereUniqueInputObjectSchema } from './objects/PublisherContactWhereUniqueInput.schema';

export const PublisherContactUpdateOneSchema: z.ZodType<Prisma.PublisherContactUpdateArgs> = z.object({ select: PublisherContactSelectObjectSchema.optional(), include: PublisherContactIncludeObjectSchema.optional(), data: z.union([PublisherContactUpdateInputObjectSchema, PublisherContactUncheckedUpdateInputObjectSchema]), where: PublisherContactWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.PublisherContactUpdateArgs>;

export const PublisherContactUpdateOneZodSchema = z.object({ select: PublisherContactSelectObjectSchema.optional(), include: PublisherContactIncludeObjectSchema.optional(), data: z.union([PublisherContactUpdateInputObjectSchema, PublisherContactUncheckedUpdateInputObjectSchema]), where: PublisherContactWhereUniqueInputObjectSchema }).strict();