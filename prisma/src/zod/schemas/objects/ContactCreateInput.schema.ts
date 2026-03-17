import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { NullableJsonNullValueInputSchema } from '../enums/NullableJsonNullValueInput.schema';
import { ClientCreateNestedOneWithoutContactInputObjectSchema as ClientCreateNestedOneWithoutContactInputObjectSchema } from './ClientCreateNestedOneWithoutContactInput.schema'

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
  Client: z.lazy(() => ClientCreateNestedOneWithoutContactInputObjectSchema).optional()
}).strict();
export const ContactCreateInputObjectSchema: z.ZodType<Prisma.ContactCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.ContactCreateInput>;
export const ContactCreateInputObjectZodSchema = makeSchema();
