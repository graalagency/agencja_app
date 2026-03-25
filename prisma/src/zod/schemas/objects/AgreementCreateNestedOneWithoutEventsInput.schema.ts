import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { AgreementCreateWithoutEventsInputObjectSchema as AgreementCreateWithoutEventsInputObjectSchema } from './AgreementCreateWithoutEventsInput.schema';
import { AgreementUncheckedCreateWithoutEventsInputObjectSchema as AgreementUncheckedCreateWithoutEventsInputObjectSchema } from './AgreementUncheckedCreateWithoutEventsInput.schema';
import { AgreementCreateOrConnectWithoutEventsInputObjectSchema as AgreementCreateOrConnectWithoutEventsInputObjectSchema } from './AgreementCreateOrConnectWithoutEventsInput.schema';
import { AgreementWhereUniqueInputObjectSchema as AgreementWhereUniqueInputObjectSchema } from './AgreementWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => AgreementCreateWithoutEventsInputObjectSchema), z.lazy(() => AgreementUncheckedCreateWithoutEventsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => AgreementCreateOrConnectWithoutEventsInputObjectSchema).optional(),
  connect: z.lazy(() => AgreementWhereUniqueInputObjectSchema).optional()
}).strict();
export const AgreementCreateNestedOneWithoutEventsInputObjectSchema: z.ZodType<Prisma.AgreementCreateNestedOneWithoutEventsInput> = makeSchema() as unknown as z.ZodType<Prisma.AgreementCreateNestedOneWithoutEventsInput>;
export const AgreementCreateNestedOneWithoutEventsInputObjectZodSchema = makeSchema();
