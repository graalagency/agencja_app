import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { AgreementRoyRateWhereUniqueInputObjectSchema as AgreementRoyRateWhereUniqueInputObjectSchema } from './AgreementRoyRateWhereUniqueInput.schema';
import { AgreementRoyRateUpdateWithoutAgreementInputObjectSchema as AgreementRoyRateUpdateWithoutAgreementInputObjectSchema } from './AgreementRoyRateUpdateWithoutAgreementInput.schema';
import { AgreementRoyRateUncheckedUpdateWithoutAgreementInputObjectSchema as AgreementRoyRateUncheckedUpdateWithoutAgreementInputObjectSchema } from './AgreementRoyRateUncheckedUpdateWithoutAgreementInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => AgreementRoyRateWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => AgreementRoyRateUpdateWithoutAgreementInputObjectSchema), z.lazy(() => AgreementRoyRateUncheckedUpdateWithoutAgreementInputObjectSchema)])
}).strict();
export const AgreementRoyRateUpdateWithWhereUniqueWithoutAgreementInputObjectSchema: z.ZodType<Prisma.AgreementRoyRateUpdateWithWhereUniqueWithoutAgreementInput> = makeSchema() as unknown as z.ZodType<Prisma.AgreementRoyRateUpdateWithWhereUniqueWithoutAgreementInput>;
export const AgreementRoyRateUpdateWithWhereUniqueWithoutAgreementInputObjectZodSchema = makeSchema();
