import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ContactCountOutputTypeCountClientContactArgsObjectSchema as ContactCountOutputTypeCountClientContactArgsObjectSchema } from './ContactCountOutputTypeCountClientContactArgs.schema';
import { ContactCountOutputTypeCountPublisherContactArgsObjectSchema as ContactCountOutputTypeCountPublisherContactArgsObjectSchema } from './ContactCountOutputTypeCountPublisherContactArgs.schema'

const makeSchema = () => z.object({
  ClientContact: z.union([z.boolean(), z.lazy(() => ContactCountOutputTypeCountClientContactArgsObjectSchema)]).optional(),
  PublisherContact: z.union([z.boolean(), z.lazy(() => ContactCountOutputTypeCountPublisherContactArgsObjectSchema)]).optional()
}).strict();
export const ContactCountOutputTypeSelectObjectSchema: z.ZodType<Prisma.ContactCountOutputTypeSelect> = makeSchema() as unknown as z.ZodType<Prisma.ContactCountOutputTypeSelect>;
export const ContactCountOutputTypeSelectObjectZodSchema = makeSchema();
