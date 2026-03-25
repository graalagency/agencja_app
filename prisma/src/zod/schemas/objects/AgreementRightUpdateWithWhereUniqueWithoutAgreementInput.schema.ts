import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { AgreementRightWhereUniqueInputObjectSchema as AgreementRightWhereUniqueInputObjectSchema } from './AgreementRightWhereUniqueInput.schema';
import { AgreementRightUpdateWithoutAgreementInputObjectSchema as AgreementRightUpdateWithoutAgreementInputObjectSchema } from './AgreementRightUpdateWithoutAgreementInput.schema';
import { AgreementRightUncheckedUpdateWithoutAgreementInputObjectSchema as AgreementRightUncheckedUpdateWithoutAgreementInputObjectSchema } from './AgreementRightUncheckedUpdateWithoutAgreementInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => AgreementRightWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => AgreementRightUpdateWithoutAgreementInputObjectSchema), z.lazy(() => AgreementRightUncheckedUpdateWithoutAgreementInputObjectSchema)])
}).strict();
export const AgreementRightUpdateWithWhereUniqueWithoutAgreementInputObjectSchema: z.ZodType<Prisma.AgreementRightUpdateWithWhereUniqueWithoutAgreementInput> = makeSchema() as unknown as z.ZodType<Prisma.AgreementRightUpdateWithWhereUniqueWithoutAgreementInput>;
export const AgreementRightUpdateWithWhereUniqueWithoutAgreementInputObjectZodSchema = makeSchema();
