import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  sourceId: z.literal(true).optional(),
  agreementId: z.literal(true).optional(),
  eventCode: z.literal(true).optional(),
  eventDate: z.literal(true).optional(),
  endDate: z.literal(true).optional(),
  noOfCopies: z.literal(true).optional(),
  dateMod: z.literal(true).optional(),
  userMod: z.literal(true).optional(),
  createdAt: z.literal(true).optional()
}).strict();
export const AgreementEventMinAggregateInputObjectSchema: z.ZodType<Prisma.AgreementEventMinAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.AgreementEventMinAggregateInputType>;
export const AgreementEventMinAggregateInputObjectZodSchema = makeSchema();
