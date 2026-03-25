import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { AgreementRightWhereUniqueInputObjectSchema as AgreementRightWhereUniqueInputObjectSchema } from './AgreementRightWhereUniqueInput.schema';
import { AgreementRightUpdateWithoutAgreementInputObjectSchema as AgreementRightUpdateWithoutAgreementInputObjectSchema } from './AgreementRightUpdateWithoutAgreementInput.schema';
import { AgreementRightUncheckedUpdateWithoutAgreementInputObjectSchema as AgreementRightUncheckedUpdateWithoutAgreementInputObjectSchema } from './AgreementRightUncheckedUpdateWithoutAgreementInput.schema';
import { AgreementRightCreateWithoutAgreementInputObjectSchema as AgreementRightCreateWithoutAgreementInputObjectSchema } from './AgreementRightCreateWithoutAgreementInput.schema';
import { AgreementRightUncheckedCreateWithoutAgreementInputObjectSchema as AgreementRightUncheckedCreateWithoutAgreementInputObjectSchema } from './AgreementRightUncheckedCreateWithoutAgreementInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => AgreementRightWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => AgreementRightUpdateWithoutAgreementInputObjectSchema), z.lazy(() => AgreementRightUncheckedUpdateWithoutAgreementInputObjectSchema)]),
  create: z.union([z.lazy(() => AgreementRightCreateWithoutAgreementInputObjectSchema), z.lazy(() => AgreementRightUncheckedCreateWithoutAgreementInputObjectSchema)])
}).strict();
export const AgreementRightUpsertWithWhereUniqueWithoutAgreementInputObjectSchema: z.ZodType<Prisma.AgreementRightUpsertWithWhereUniqueWithoutAgreementInput> = makeSchema() as unknown as z.ZodType<Prisma.AgreementRightUpsertWithWhereUniqueWithoutAgreementInput>;
export const AgreementRightUpsertWithWhereUniqueWithoutAgreementInputObjectZodSchema = makeSchema();
