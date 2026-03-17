import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { AuthorUncheckedCreateNestedManyWithoutClientInputObjectSchema as AuthorUncheckedCreateNestedManyWithoutClientInputObjectSchema } from './AuthorUncheckedCreateNestedManyWithoutClientInput.schema';
import { DocumentUncheckedCreateNestedManyWithoutClientInputObjectSchema as DocumentUncheckedCreateNestedManyWithoutClientInputObjectSchema } from './DocumentUncheckedCreateNestedManyWithoutClientInput.schema';
import { InvoiceUncheckedCreateNestedManyWithoutClientInputObjectSchema as InvoiceUncheckedCreateNestedManyWithoutClientInputObjectSchema } from './InvoiceUncheckedCreateNestedManyWithoutClientInput.schema'

const makeSchema = () => z.object({
  id: z.number().int().optional(),
  name: z.string(),
  email: z.string().optional().nullable(),
  phone: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date(),
  address: z.string().optional().nullable(),
  bankAccount: z.string().optional().nullable(),
  city: z.string().optional().nullable(),
  country: z.string().optional().nullable(),
  legalForm: z.string().optional().nullable(),
  nip: z.string().optional().nullable(),
  notes: z.string().optional().nullable(),
  postalCode: z.string().optional().nullable(),
  regon: z.string().optional().nullable(),
  Author: z.lazy(() => AuthorUncheckedCreateNestedManyWithoutClientInputObjectSchema).optional(),
  Document: z.lazy(() => DocumentUncheckedCreateNestedManyWithoutClientInputObjectSchema).optional(),
  Invoice: z.lazy(() => InvoiceUncheckedCreateNestedManyWithoutClientInputObjectSchema).optional()
}).strict();
export const ClientUncheckedCreateWithoutContactInputObjectSchema: z.ZodType<Prisma.ClientUncheckedCreateWithoutContactInput> = makeSchema() as unknown as z.ZodType<Prisma.ClientUncheckedCreateWithoutContactInput>;
export const ClientUncheckedCreateWithoutContactInputObjectZodSchema = makeSchema();
