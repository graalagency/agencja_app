import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.number().int().optional(),
  sourceId: z.number().int().optional().nullable(),
  agreementId: z.number().int(),
  eventCode: z.number().int(),
  eventDate: z.coerce.date().optional().nullable(),
  endDate: z.coerce.date().optional().nullable(),
  noOfCopies: z.number().int().optional().nullable(),
  dateMod: z.coerce.date().optional().nullable(),
  userMod: z.string().max(30).optional().nullable(),
  createdAt: z.coerce.date().optional()
}).strict();
export const AgreementEventUncheckedCreateInputObjectSchema: z.ZodType<Prisma.AgreementEventUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.AgreementEventUncheckedCreateInput>;
export const AgreementEventUncheckedCreateInputObjectZodSchema = makeSchema();
