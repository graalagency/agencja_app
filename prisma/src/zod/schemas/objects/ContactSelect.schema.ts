import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ClientContactFindManySchema as ClientContactFindManySchema } from '../findManyClientContact.schema';
import { PublisherContactFindManySchema as PublisherContactFindManySchema } from '../findManyPublisherContact.schema';
import { ContactCountOutputTypeArgsObjectSchema as ContactCountOutputTypeArgsObjectSchema } from './ContactCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  phoneNumber: z.boolean().optional(),
  firstName: z.boolean().optional(),
  middleName: z.boolean().optional(),
  lastName: z.boolean().optional(),
  informal: z.boolean().optional(),
  fax: z.boolean().optional(),
  email: z.boolean().optional(),
  contactPosition: z.boolean().optional(),
  accountant: z.boolean().optional(),
  photos: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  ClientContact: z.union([z.boolean(), z.lazy(() => ClientContactFindManySchema)]).optional(),
  PublisherContact: z.union([z.boolean(), z.lazy(() => PublisherContactFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => ContactCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const ContactSelectObjectSchema: z.ZodType<Prisma.ContactSelect> = makeSchema() as unknown as z.ZodType<Prisma.ContactSelect>;
export const ContactSelectObjectZodSchema = makeSchema();
