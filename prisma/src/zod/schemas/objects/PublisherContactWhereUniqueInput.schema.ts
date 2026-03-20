import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { PublisherContactContactIdPublisherIdCompoundUniqueInputObjectSchema as PublisherContactContactIdPublisherIdCompoundUniqueInputObjectSchema } from './PublisherContactContactIdPublisherIdCompoundUniqueInput.schema'

const makeSchema = () => z.object({
  id: z.number().int().optional(),
  contactId_publisherId: z.lazy(() => PublisherContactContactIdPublisherIdCompoundUniqueInputObjectSchema).optional()
}).strict();
export const PublisherContactWhereUniqueInputObjectSchema: z.ZodType<Prisma.PublisherContactWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.PublisherContactWhereUniqueInput>;
export const PublisherContactWhereUniqueInputObjectZodSchema = makeSchema();
