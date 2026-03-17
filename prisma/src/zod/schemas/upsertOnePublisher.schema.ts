import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { PublisherSelectObjectSchema as PublisherSelectObjectSchema } from './objects/PublisherSelect.schema';
import { PublisherWhereUniqueInputObjectSchema as PublisherWhereUniqueInputObjectSchema } from './objects/PublisherWhereUniqueInput.schema';
import { PublisherCreateInputObjectSchema as PublisherCreateInputObjectSchema } from './objects/PublisherCreateInput.schema';
import { PublisherUncheckedCreateInputObjectSchema as PublisherUncheckedCreateInputObjectSchema } from './objects/PublisherUncheckedCreateInput.schema';
import { PublisherUpdateInputObjectSchema as PublisherUpdateInputObjectSchema } from './objects/PublisherUpdateInput.schema';
import { PublisherUncheckedUpdateInputObjectSchema as PublisherUncheckedUpdateInputObjectSchema } from './objects/PublisherUncheckedUpdateInput.schema';

export const PublisherUpsertOneSchema: z.ZodType<Prisma.PublisherUpsertArgs> = z.object({ select: PublisherSelectObjectSchema.optional(),  where: PublisherWhereUniqueInputObjectSchema, create: z.union([ PublisherCreateInputObjectSchema, PublisherUncheckedCreateInputObjectSchema ]), update: z.union([ PublisherUpdateInputObjectSchema, PublisherUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.PublisherUpsertArgs>;

export const PublisherUpsertOneZodSchema = z.object({ select: PublisherSelectObjectSchema.optional(),  where: PublisherWhereUniqueInputObjectSchema, create: z.union([ PublisherCreateInputObjectSchema, PublisherUncheckedCreateInputObjectSchema ]), update: z.union([ PublisherUpdateInputObjectSchema, PublisherUncheckedUpdateInputObjectSchema ]) }).strict();