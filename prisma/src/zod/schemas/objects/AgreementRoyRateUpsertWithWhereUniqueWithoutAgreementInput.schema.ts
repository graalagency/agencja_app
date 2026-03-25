import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { AgreementRoyRateWhereUniqueInputObjectSchema as AgreementRoyRateWhereUniqueInputObjectSchema } from './AgreementRoyRateWhereUniqueInput.schema';
import { AgreementRoyRateUpdateWithoutAgreementInputObjectSchema as AgreementRoyRateUpdateWithoutAgreementInputObjectSchema } from './AgreementRoyRateUpdateWithoutAgreementInput.schema';
import { AgreementRoyRateUncheckedUpdateWithoutAgreementInputObjectSchema as AgreementRoyRateUncheckedUpdateWithoutAgreementInputObjectSchema } from './AgreementRoyRateUncheckedUpdateWithoutAgreementInput.schema';
import { AgreementRoyRateCreateWithoutAgreementInputObjectSchema as AgreementRoyRateCreateWithoutAgreementInputObjectSchema } from './AgreementRoyRateCreateWithoutAgreementInput.schema';
import { AgreementRoyRateUncheckedCreateWithoutAgreementInputObjectSchema as AgreementRoyRateUncheckedCreateWithoutAgreementInputObjectSchema } from './AgreementRoyRateUncheckedCreateWithoutAgreementInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => AgreementRoyRateWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => AgreementRoyRateUpdateWithoutAgreementInputObjectSchema), z.lazy(() => AgreementRoyRateUncheckedUpdateWithoutAgreementInputObjectSchema)]),
  create: z.union([z.lazy(() => AgreementRoyRateCreateWithoutAgreementInputObjectSchema), z.lazy(() => AgreementRoyRateUncheckedCreateWithoutAgreementInputObjectSchema)])
}).strict();
export const AgreementRoyRateUpsertWithWhereUniqueWithoutAgreementInputObjectSchema: z.ZodType<Prisma.AgreementRoyRateUpsertWithWhereUniqueWithoutAgreementInput> = makeSchema() as unknown as z.ZodType<Prisma.AgreementRoyRateUpsertWithWhereUniqueWithoutAgreementInput>;
export const AgreementRoyRateUpsertWithWhereUniqueWithoutAgreementInputObjectZodSchema = makeSchema();
