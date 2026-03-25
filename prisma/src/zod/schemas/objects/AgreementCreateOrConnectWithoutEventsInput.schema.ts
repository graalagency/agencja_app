import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { AgreementWhereUniqueInputObjectSchema as AgreementWhereUniqueInputObjectSchema } from './AgreementWhereUniqueInput.schema';
import { AgreementCreateWithoutEventsInputObjectSchema as AgreementCreateWithoutEventsInputObjectSchema } from './AgreementCreateWithoutEventsInput.schema';
import { AgreementUncheckedCreateWithoutEventsInputObjectSchema as AgreementUncheckedCreateWithoutEventsInputObjectSchema } from './AgreementUncheckedCreateWithoutEventsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => AgreementWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => AgreementCreateWithoutEventsInputObjectSchema), z.lazy(() => AgreementUncheckedCreateWithoutEventsInputObjectSchema)])
}).strict();
export const AgreementCreateOrConnectWithoutEventsInputObjectSchema: z.ZodType<Prisma.AgreementCreateOrConnectWithoutEventsInput> = makeSchema() as unknown as z.ZodType<Prisma.AgreementCreateOrConnectWithoutEventsInput>;
export const AgreementCreateOrConnectWithoutEventsInputObjectZodSchema = makeSchema();
