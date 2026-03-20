import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { PublisherCreateNestedOneWithoutTaxResidenceCertInputObjectSchema as PublisherCreateNestedOneWithoutTaxResidenceCertInputObjectSchema } from './PublisherCreateNestedOneWithoutTaxResidenceCertInput.schema';
import { TaxResidenceSendCreateNestedManyWithoutCertInputObjectSchema as TaxResidenceSendCreateNestedManyWithoutCertInputObjectSchema } from './TaxResidenceSendCreateNestedManyWithoutCertInput.schema'

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
  Publisher: z.lazy(() => PublisherCreateNestedOneWithoutTaxResidenceCertInputObjectSchema).optional(),
  SendLog: z.lazy(() => TaxResidenceSendCreateNestedManyWithoutCertInputObjectSchema).optional()
}).strict();
export const TaxResidenceCertCreateWithoutClientInputObjectSchema: z.ZodType<Prisma.TaxResidenceCertCreateWithoutClientInput> = makeSchema() as unknown as z.ZodType<Prisma.TaxResidenceCertCreateWithoutClientInput>;
export const TaxResidenceCertCreateWithoutClientInputObjectZodSchema = makeSchema();
