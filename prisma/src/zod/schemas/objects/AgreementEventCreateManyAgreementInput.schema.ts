import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.number().int().optional(),
  sourceId: z.number().int().optional().nullable(),
  eventCode: z.number().int(),
  eventDate: z.coerce.date().optional().nullable(),
  endDate: z.coerce.date().optional().nullable(),
  noOfCopies: z.number().int().optional().nullable(),
  dateMod: z.coerce.date().optional().nullable(),
  userMod: z.string().max(30).optional().nullable(),
  createdAt: z.coerce.date().optional()
}).strict();
export const AgreementEventCreateManyAgreementInputObjectSchema: z.ZodType<Prisma.AgreementEventCreateManyAgreementInput> = makeSchema() as unknown as z.ZodType<Prisma.AgreementEventCreateManyAgreementInput>;
export const AgreementEventCreateManyAgreementInputObjectZodSchema = makeSchema();
