import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ClientContactFindManySchema as ClientContactFindManySchema } from '../findManyClientContact.schema';
import { PublisherContactFindManySchema as PublisherContactFindManySchema } from '../findManyPublisherContact.schema';
import { ContactCountOutputTypeArgsObjectSchema as ContactCountOutputTypeArgsObjectSchema } from './ContactCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  ClientContact: z.union([z.boolean(), z.lazy(() => ClientContactFindManySchema)]).optional(),
  PublisherContact: z.union([z.boolean(), z.lazy(() => PublisherContactFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => ContactCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const ContactIncludeObjectSchema: z.ZodType<Prisma.ContactInclude> = makeSchema() as unknown as z.ZodType<Prisma.ContactInclude>;
export const ContactIncludeObjectZodSchema = makeSchema();
