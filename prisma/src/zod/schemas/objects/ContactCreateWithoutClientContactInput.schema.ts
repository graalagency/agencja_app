import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { NullableJsonNullValueInputSchema } from '../enums/NullableJsonNullValueInput.schema';
import { PublisherContactCreateNestedManyWithoutContactInputObjectSchema as PublisherContactCreateNestedManyWithoutContactInputObjectSchema } from './PublisherContactCreateNestedManyWithoutContactInput.schema'

import { JsonValueSchema as jsonSchema } from '../../helpers/json-helpers';

const makeSchema = () => z.object({
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
  updatedAt: z.coerce.date().optional(),
  PublisherContact: z.lazy(() => PublisherContactCreateNestedManyWithoutContactInputObjectSchema).optional()
}).strict();
export const ContactCreateWithoutClientContactInputObjectSchema: z.ZodType<Prisma.ContactCreateWithoutClientContactInput> = makeSchema() as unknown as z.ZodType<Prisma.ContactCreateWithoutClientContactInput>;
export const ContactCreateWithoutClientContactInputObjectZodSchema = makeSchema();
