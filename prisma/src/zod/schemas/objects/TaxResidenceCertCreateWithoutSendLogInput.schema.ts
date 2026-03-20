import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ClientCreateNestedOneWithoutTaxResidenceCertInputObjectSchema as ClientCreateNestedOneWithoutTaxResidenceCertInputObjectSchema } from './ClientCreateNestedOneWithoutTaxResidenceCertInput.schema';
import { PublisherCreateNestedOneWithoutTaxResidenceCertInputObjectSchema as PublisherCreateNestedOneWithoutTaxResidenceCertInputObjectSchema } from './PublisherCreateNestedOneWithoutTaxResidenceCertInput.schema'

const makeSchema = () => z.object({
  sourceId: z.number().int().optional().nullable(),
  validDate: z.coerce.date(),
  requestDate: z.coerce.date().optional().nullable(),
  receiveDate: z.coerce.date().optional().nullable(),
  hasCert: z.boolean().optional(),
  notes: z.string().optional().nullable(),
  fileData: z.instanceof(Uint8Array).optional().nullable(),
  fileName: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date(),
  Client: z.lazy(() => ClientCreateNestedOneWithoutTaxResidenceCertInputObjectSchema).optional(),
  Publisher: z.lazy(() => PublisherCreateNestedOneWithoutTaxResidenceCertInputObjectSchema).optional()
}).strict();
export const TaxResidenceCertCreateWithoutSendLogInputObjectSchema: z.ZodType<Prisma.TaxResidenceCertCreateWithoutSendLogInput> = makeSchema() as unknown as z.ZodType<Prisma.TaxResidenceCertCreateWithoutSendLogInput>;
export const TaxResidenceCertCreateWithoutSendLogInputObjectZodSchema = makeSchema();
