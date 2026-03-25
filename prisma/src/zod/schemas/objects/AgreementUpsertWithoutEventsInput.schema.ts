import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { AgreementUpdateWithoutEventsInputObjectSchema as AgreementUpdateWithoutEventsInputObjectSchema } from './AgreementUpdateWithoutEventsInput.schema';
import { AgreementUncheckedUpdateWithoutEventsInputObjectSchema as AgreementUncheckedUpdateWithoutEventsInputObjectSchema } from './AgreementUncheckedUpdateWithoutEventsInput.schema';
import { AgreementCreateWithoutEventsInputObjectSchema as AgreementCreateWithoutEventsInputObjectSchema } from './AgreementCreateWithoutEventsInput.schema';
import { AgreementUncheckedCreateWithoutEventsInputObjectSchema as AgreementUncheckedCreateWithoutEventsInputObjectSchema } from './AgreementUncheckedCreateWithoutEventsInput.schema';
import { AgreementWhereInputObjectSchema as AgreementWhereInputObjectSchema } from './AgreementWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => AgreementUpdateWithoutEventsInputObjectSchema), z.lazy(() => AgreementUncheckedUpdateWithoutEventsInputObjectSchema)]),
  create: z.union([z.lazy(() => AgreementCreateWithoutEventsInputObjectSchema), z.lazy(() => AgreementUncheckedCreateWithoutEventsInputObjectSchema)]),
  where: z.lazy(() => AgreementWhereInputObjectSchema).optional()
}).strict();
export const AgreementUpsertWithoutEventsInputObjectSchema: z.ZodType<Prisma.AgreementUpsertWithoutEventsInput> = makeSchema() as unknown as z.ZodType<Prisma.AgreementUpsertWithoutEventsInput>;
export const AgreementUpsertWithoutEventsInputObjectZodSchema = makeSchema();
