import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { AgreementEventWhereUniqueInputObjectSchema as AgreementEventWhereUniqueInputObjectSchema } from './AgreementEventWhereUniqueInput.schema';
import { AgreementEventUpdateWithoutAgreementInputObjectSchema as AgreementEventUpdateWithoutAgreementInputObjectSchema } from './AgreementEventUpdateWithoutAgreementInput.schema';
import { AgreementEventUncheckedUpdateWithoutAgreementInputObjectSchema as AgreementEventUncheckedUpdateWithoutAgreementInputObjectSchema } from './AgreementEventUncheckedUpdateWithoutAgreementInput.schema';
import { AgreementEventCreateWithoutAgreementInputObjectSchema as AgreementEventCreateWithoutAgreementInputObjectSchema } from './AgreementEventCreateWithoutAgreementInput.schema';
import { AgreementEventUncheckedCreateWithoutAgreementInputObjectSchema as AgreementEventUncheckedCreateWithoutAgreementInputObjectSchema } from './AgreementEventUncheckedCreateWithoutAgreementInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => AgreementEventWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => AgreementEventUpdateWithoutAgreementInputObjectSchema), z.lazy(() => AgreementEventUncheckedUpdateWithoutAgreementInputObjectSchema)]),
  create: z.union([z.lazy(() => AgreementEventCreateWithoutAgreementInputObjectSchema), z.lazy(() => AgreementEventUncheckedCreateWithoutAgreementInputObjectSchema)])
}).strict();
export const AgreementEventUpsertWithWhereUniqueWithoutAgreementInputObjectSchema: z.ZodType<Prisma.AgreementEventUpsertWithWhereUniqueWithoutAgreementInput> = makeSchema() as unknown as z.ZodType<Prisma.AgreementEventUpsertWithWhereUniqueWithoutAgreementInput>;
export const AgreementEventUpsertWithWhereUniqueWithoutAgreementInputObjectZodSchema = makeSchema();
