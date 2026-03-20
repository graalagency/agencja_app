import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.number().int().optional(),
  clientId: z.number().int().optional().nullable(),
  publisherId: z.number().int().optional().nullable(),
  dateSend: z.coerce.date().optional().nullable(),
  sendOrig: z.boolean().optional(),
  sendCopy: z.boolean().optional(),
  createdAt: z.coerce.date().optional()
}).strict();
export const TaxResidenceSendCreateManyCertInputObjectSchema: z.ZodType<Prisma.TaxResidenceSendCreateManyCertInput> = makeSchema() as unknown as z.ZodType<Prisma.TaxResidenceSendCreateManyCertInput>;
export const TaxResidenceSendCreateManyCertInputObjectZodSchema = makeSchema();
