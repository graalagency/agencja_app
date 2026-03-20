import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { PublisherContactSelectObjectSchema as PublisherContactSelectObjectSchema } from './objects/PublisherContactSelect.schema';
import { PublisherContactIncludeObjectSchema as PublisherContactIncludeObjectSchema } from './objects/PublisherContactInclude.schema';
import { PublisherContactWhereUniqueInputObjectSchema as PublisherContactWhereUniqueInputObjectSchema } from './objects/PublisherContactWhereUniqueInput.schema';
import { PublisherContactCreateInputObjectSchema as PublisherContactCreateInputObjectSchema } from './objects/PublisherContactCreateInput.schema';
import { PublisherContactUncheckedCreateInputObjectSchema as PublisherContactUncheckedCreateInputObjectSchema } from './objects/PublisherContactUncheckedCreateInput.schema';
import { PublisherContactUpdateInputObjectSchema as PublisherContactUpdateInputObjectSchema } from './objects/PublisherContactUpdateInput.schema';
import { PublisherContactUncheckedUpdateInputObjectSchema as PublisherContactUncheckedUpdateInputObjectSchema } from './objects/PublisherContactUncheckedUpdateInput.schema';

export const PublisherContactUpsertOneSchema: z.ZodType<Prisma.PublisherContactUpsertArgs> = z.object({ select: PublisherContactSelectObjectSchema.optional(), include: PublisherContactIncludeObjectSchema.optional(), where: PublisherContactWhereUniqueInputObjectSchema, create: z.union([ PublisherContactCreateInputObjectSchema, PublisherContactUncheckedCreateInputObjectSchema ]), update: z.union([ PublisherContactUpdateInputObjectSchema, PublisherContactUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.PublisherContactUpsertArgs>;

export const PublisherContactUpsertOneZodSchema = z.object({ select: PublisherContactSelectObjectSchema.optional(), include: PublisherContactIncludeObjectSchema.optional(), where: PublisherContactWhereUniqueInputObjectSchema, create: z.union([ PublisherContactCreateInputObjectSchema, PublisherContactUncheckedCreateInputObjectSchema ]), update: z.union([ PublisherContactUpdateInputObjectSchema, PublisherContactUncheckedUpdateInputObjectSchema ]) }).strict();