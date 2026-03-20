import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { PublisherSelectObjectSchema as PublisherSelectObjectSchema } from './objects/PublisherSelect.schema';
import { PublisherIncludeObjectSchema as PublisherIncludeObjectSchema } from './objects/PublisherInclude.schema';
import { PublisherCreateInputObjectSchema as PublisherCreateInputObjectSchema } from './objects/PublisherCreateInput.schema';
import { PublisherUncheckedCreateInputObjectSchema as PublisherUncheckedCreateInputObjectSchema } from './objects/PublisherUncheckedCreateInput.schema';

export const PublisherCreateOneSchema: z.ZodType<Prisma.PublisherCreateArgs> = z.object({ select: PublisherSelectObjectSchema.optional(), include: PublisherIncludeObjectSchema.optional(), data: z.union([PublisherCreateInputObjectSchema, PublisherUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.PublisherCreateArgs>;

export const PublisherCreateOneZodSchema = z.object({ select: PublisherSelectObjectSchema.optional(), include: PublisherIncludeObjectSchema.optional(), data: z.union([PublisherCreateInputObjectSchema, PublisherUncheckedCreateInputObjectSchema]) }).strict();