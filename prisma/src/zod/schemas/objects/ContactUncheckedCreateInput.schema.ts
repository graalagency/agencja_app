import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { NullableJsonNullValueInputSchema } from '../enums/NullableJsonNullValueInput.schema';
import { ClientContactUncheckedCreateNestedManyWithoutContactInputObjectSchema as ClientContactUncheckedCreateNestedManyWithoutContactInputObjectSchema } from './ClientContactUncheckedCreateNestedManyWithoutContactInput.schema';
import { PublisherContactUncheckedCreateNestedManyWithoutContactInputObjectSchema as PublisherContactUncheckedCreateNestedManyWithoutContactInputObjectSchema } from './PublisherContactUncheckedCreateNestedManyWithoutContactInput.schema'

import { JsonValueSchema as jsonSchema } from '../../helpers/json-helpers';

const makeSchema = () => z.object({
  id: z.number().int().optional(),
  phoneNumber: z.string().optional().nullable(),
  firstName: z.string(),
  middleName: z.string().optional().nullable(),
  lastName: z.string(),
  informal: z.number().int().optional(),
  fax: z.string().optional().nullable(),
  email: z.string().optional().nullable(),
  contactPosition: z.string().optional().nullable(),
  accountant: z.number().int().optional().nullable(),
  photos: z.union([NullableJsonNullValueInputSchema, jsonSchema]).optional(),
  createdAt: z.coerce.date().optional(),
  ClientContact: z.lazy(() => ClientContactUncheckedCreateNestedManyWithoutContactInputObjectSchema).optional(),
  PublisherContact: z.lazy(() => PublisherContactUncheckedCreateNestedManyWithoutContactInputObjectSchema).optional()
}).strict();
export const ContactUncheckedCreateInputObjectSchema: z.ZodType<Prisma.ContactUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.ContactUncheckedCreateInput>;
export const ContactUncheckedCreateInputObjectZodSchema = makeSchema();
