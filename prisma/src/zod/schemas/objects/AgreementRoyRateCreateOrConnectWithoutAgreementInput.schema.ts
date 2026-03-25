import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { AgreementRoyRateWhereUniqueInputObjectSchema as AgreementRoyRateWhereUniqueInputObjectSchema } from './AgreementRoyRateWhereUniqueInput.schema';
import { AgreementRoyRateCreateWithoutAgreementInputObjectSchema as AgreementRoyRateCreateWithoutAgreementInputObjectSchema } from './AgreementRoyRateCreateWithoutAgreementInput.schema';
import { AgreementRoyRateUncheckedCreateWithoutAgreementInputObjectSchema as AgreementRoyRateUncheckedCreateWithoutAgreementInputObjectSchema } from './AgreementRoyRateUncheckedCreateWithoutAgreementInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => AgreementRoyRateWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => AgreementRoyRateCreateWithoutAgreementInputObjectSchema), z.lazy(() => AgreementRoyRateUncheckedCreateWithoutAgreementInputObjectSchema)])
}).strict();
export const AgreementRoyRateCreateOrConnectWithoutAgreementInputObjectSchema: z.ZodType<Prisma.AgreementRoyRateCreateOrConnectWithoutAgreementInput> = makeSchema() as unknown as z.ZodType<Prisma.AgreementRoyRateCreateOrConnectWithoutAgreementInput>;
export const AgreementRoyRateCreateOrConnectWithoutAgreementInputObjectZodSchema = makeSchema();
