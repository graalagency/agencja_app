import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { AgreementArgsObjectSchema as AgreementArgsObjectSchema } from './AgreementArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  sourceId: z.boolean().optional(),
  agreementId: z.boolean().optional(),
  eventCode: z.boolean().optional(),
  eventDate: z.boolean().optional(),
  endDate: z.boolean().optional(),
  noOfCopies: z.boolean().optional(),
  dateMod: z.boolean().optional(),
  userMod: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  Agreement: z.union([z.boolean(), z.lazy(() => AgreementArgsObjectSchema)]).optional()
}).strict();
export const AgreementEventSelectObjectSchema: z.ZodType<Prisma.AgreementEventSelect> = makeSchema() as unknown as z.ZodType<Prisma.AgreementEventSelect>;
export const AgreementEventSelectObjectZodSchema = makeSchema();
