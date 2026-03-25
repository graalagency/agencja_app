import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  sourceId: z.number().int().optional().nullable(),
  eventCode: z.number().int(),
  eventDate: z.coerce.date().optional().nullable(),
  endDate: z.coerce.date().optional().nullable(),
  noOfCopies: z.number().int().optional().nullable(),
  dateMod: z.coerce.date().optional().nullable(),
  userMod: z.string().max(30).optional().nullable(),
  createdAt: z.coerce.date().optional()
}).strict();
export const AgreementEventCreateWithoutAgreementInputObjectSchema: z.ZodType<Prisma.AgreementEventCreateWithoutAgreementInput> = makeSchema() as unknown as z.ZodType<Prisma.AgreementEventCreateWithoutAgreementInput>;
export const AgreementEventCreateWithoutAgreementInputObjectZodSchema = makeSchema();
