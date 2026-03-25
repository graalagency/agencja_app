import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { AgreementRightWhereUniqueInputObjectSchema as AgreementRightWhereUniqueInputObjectSchema } from './AgreementRightWhereUniqueInput.schema';
import { AgreementRightCreateWithoutAgreementInputObjectSchema as AgreementRightCreateWithoutAgreementInputObjectSchema } from './AgreementRightCreateWithoutAgreementInput.schema';
import { AgreementRightUncheckedCreateWithoutAgreementInputObjectSchema as AgreementRightUncheckedCreateWithoutAgreementInputObjectSchema } from './AgreementRightUncheckedCreateWithoutAgreementInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => AgreementRightWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => AgreementRightCreateWithoutAgreementInputObjectSchema), z.lazy(() => AgreementRightUncheckedCreateWithoutAgreementInputObjectSchema)])
}).strict();
export const AgreementRightCreateOrConnectWithoutAgreementInputObjectSchema: z.ZodType<Prisma.AgreementRightCreateOrConnectWithoutAgreementInput> = makeSchema() as unknown as z.ZodType<Prisma.AgreementRightCreateOrConnectWithoutAgreementInput>;
export const AgreementRightCreateOrConnectWithoutAgreementInputObjectZodSchema = makeSchema();
