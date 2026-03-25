import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { AgreementCreateNestedOneWithoutEventsInputObjectSchema as AgreementCreateNestedOneWithoutEventsInputObjectSchema } from './AgreementCreateNestedOneWithoutEventsInput.schema'

const makeSchema = () => z.object({
  sourceId: z.number().int().optional().nullable(),
  eventCode: z.number().int(),
  eventDate: z.coerce.date().optional().nullable(),
  endDate: z.coerce.date().optional().nullable(),
  noOfCopies: z.number().int().optional().nullable(),
  dateMod: z.coerce.date().optional().nullable(),
  userMod: z.string().max(30).optional().nullable(),
  createdAt: z.coerce.date().optional(),
  Agreement: z.lazy(() => AgreementCreateNestedOneWithoutEventsInputObjectSchema)
}).strict();
export const AgreementEventCreateInputObjectSchema: z.ZodType<Prisma.AgreementEventCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.AgreementEventCreateInput>;
export const AgreementEventCreateInputObjectZodSchema = makeSchema();
