import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.number().int().optional(),
  certId: z.number().int(),
  clientId: z.number().int().optional().nullable(),
  publisherId: z.number().int().optional().nullable(),
  dateSend: z.coerce.date().optional().nullable(),
  sendOrig: z.boolean().optional(),
  sendCopy: z.boolean().optional(),
  createdAt: z.coerce.date().optional()
}).strict();
export const TaxResidenceSendUncheckedCreateInputObjectSchema: z.ZodType<Prisma.TaxResidenceSendUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.TaxResidenceSendUncheckedCreateInput>;
export const TaxResidenceSendUncheckedCreateInputObjectZodSchema = makeSchema();
