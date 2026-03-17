import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { NullableJsonNullValueInputSchema } from '../enums/NullableJsonNullValueInput.schema'

import { JsonValueSchema as jsonSchema } from '../../helpers/json-helpers';

const makeSchema = () => z.object({
  firstName: z.string(),
  middleName: z.string().optional().nullable(),
  lastName: z.string(),
  description: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date(),
  photos: z.union([NullableJsonNullValueInputSchema, jsonSchema]).optional(),
  personalEmail: z.string().optional().nullable(),
  workEmail: z.string().optional().nullable()
}).strict();
export const AuthorCreateWithoutClientInputObjectSchema: z.ZodType<Prisma.AuthorCreateWithoutClientInput> = makeSchema() as unknown as z.ZodType<Prisma.AuthorCreateWithoutClientInput>;
export const AuthorCreateWithoutClientInputObjectZodSchema = makeSchema();
