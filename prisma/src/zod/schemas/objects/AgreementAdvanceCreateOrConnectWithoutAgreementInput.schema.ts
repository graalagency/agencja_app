import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { AgreementAdvanceWhereUniqueInputObjectSchema as AgreementAdvanceWhereUniqueInputObjectSchema } from './AgreementAdvanceWhereUniqueInput.schema';
import { AgreementAdvanceCreateWithoutAgreementInputObjectSchema as AgreementAdvanceCreateWithoutAgreementInputObjectSchema } from './AgreementAdvanceCreateWithoutAgreementInput.schema';
import { AgreementAdvanceUncheckedCreateWithoutAgreementInputObjectSchema as AgreementAdvanceUncheckedCreateWithoutAgreementInputObjectSchema } from './AgreementAdvanceUncheckedCreateWithoutAgreementInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => AgreementAdvanceWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => AgreementAdvanceCreateWithoutAgreementInputObjectSchema), z.lazy(() => AgreementAdvanceUncheckedCreateWithoutAgreementInputObjectSchema)])
}).strict();
export const AgreementAdvanceCreateOrConnectWithoutAgreementInputObjectSchema: z.ZodType<Prisma.AgreementAdvanceCreateOrConnectWithoutAgreementInput> = makeSchema() as unknown as z.ZodType<Prisma.AgreementAdvanceCreateOrConnectWithoutAgreementInput>;
export const AgreementAdvanceCreateOrConnectWithoutAgreementInputObjectZodSchema = makeSchema();
