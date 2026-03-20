import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { PublisherContactSelectObjectSchema as PublisherContactSelectObjectSchema } from './objects/PublisherContactSelect.schema';
import { PublisherContactIncludeObjectSchema as PublisherContactIncludeObjectSchema } from './objects/PublisherContactInclude.schema';
import { PublisherContactCreateInputObjectSchema as PublisherContactCreateInputObjectSchema } from './objects/PublisherContactCreateInput.schema';
import { PublisherContactUncheckedCreateInputObjectSchema as PublisherContactUncheckedCreateInputObjectSchema } from './objects/PublisherContactUncheckedCreateInput.schema';

export const PublisherContactCreateOneSchema: z.ZodType<Prisma.PublisherContactCreateArgs> = z.object({ select: PublisherContactSelectObjectSchema.optional(), include: PublisherContactIncludeObjectSchema.optional(), data: z.union([PublisherContactCreateInputObjectSchema, PublisherContactUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.PublisherContactCreateArgs>;

export const PublisherContactCreateOneZodSchema = z.object({ select: PublisherContactSelectObjectSchema.optional(), include: PublisherContactIncludeObjectSchema.optional(), data: z.union([PublisherContactCreateInputObjectSchema, PublisherContactUncheckedCreateInputObjectSchema]) }).strict();