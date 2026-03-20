import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  contactId: z.number().int(),
  publisherId: z.number().int()
}).strict();
export const PublisherContactContactIdPublisherIdCompoundUniqueInputObjectSchema: z.ZodType<Prisma.PublisherContactContactIdPublisherIdCompoundUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.PublisherContactContactIdPublisherIdCompoundUniqueInput>;
export const PublisherContactContactIdPublisherIdCompoundUniqueInputObjectZodSchema = makeSchema();
