import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.number().int().optional(),
  sourceId: z.number().int().optional().nullable(),
  clientId: z.number().int().optional().nullable(),
  validDate: z.coerce.date(),
  requestDate: z.coerce.date().optional().nullable(),
  receiveDate: z.coerce.date().optional().nullable(),
  hasCert: z.boolean().optional(),
  notes: z.string().optional().nullable(),
  fileData: z.instanceof(Uint8Array).optional().nullable(),
  fileName: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date()
}).strict();
export const TaxResidenceCertCreateManyPublisherInputObjectSchema: z.ZodType<Prisma.TaxResidenceCertCreateManyPublisherInput> = makeSchema() as unknown as z.ZodType<Prisma.TaxResidenceCertCreateManyPublisherInput>;
export const TaxResidenceCertCreateManyPublisherInputObjectZodSchema = makeSchema();
