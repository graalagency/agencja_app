import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { NullableJsonNullValueInputSchema } from '../enums/NullableJsonNullValueInput.schema'

import { JsonValueSchema as jsonSchema } from '../../helpers/json-helpers';

const makeSchema = () => z.object({
  id: z.number().int().optional(),
  sourceId: z.number().int().optional().nullable(),
  firstName: z.string(),
  middleName: z.string().optional().nullable(),
  lastName: z.string(),
  suffix: z.string().optional().nullable(),
  penName: z.string().optional().nullable(),
  description: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date(),
  photos: z.union([NullableJsonNullValueInputSchema, jsonSchema]).optional(),
  personalEmail: z.string().optional().nullable(),
  workEmail: z.string().optional().nullable()
}).strict();
export const AuthorCreateManyClientInputObjectSchema: z.ZodType<Prisma.AuthorCreateManyClientInput> = makeSchema() as unknown as z.ZodType<Prisma.AuthorCreateManyClientInput>;
export const AuthorCreateManyClientInputObjectZodSchema = makeSchema();
