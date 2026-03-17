import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { NullableJsonNullValueInputSchema } from '../enums/NullableJsonNullValueInput.schema'

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
  updatedAt: z.coerce.date().optional()
}).strict();
export const ContactCreateWithoutClientInputObjectSchema: z.ZodType<Prisma.ContactCreateWithoutClientInput> = makeSchema() as unknown as z.ZodType<Prisma.ContactCreateWithoutClientInput>;
export const ContactCreateWithoutClientInputObjectZodSchema = makeSchema();
