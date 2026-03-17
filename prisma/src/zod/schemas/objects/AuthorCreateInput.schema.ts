import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { NullableJsonNullValueInputSchema } from '../enums/NullableJsonNullValueInput.schema';
import { ClientCreateNestedOneWithoutAuthorInputObjectSchema as ClientCreateNestedOneWithoutAuthorInputObjectSchema } from './ClientCreateNestedOneWithoutAuthorInput.schema'

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
  workEmail: z.string().optional().nullable(),
  Client: z.lazy(() => ClientCreateNestedOneWithoutAuthorInputObjectSchema).optional()
}).strict();
export const AuthorCreateInputObjectSchema: z.ZodType<Prisma.AuthorCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.AuthorCreateInput>;
export const AuthorCreateInputObjectZodSchema = makeSchema();
