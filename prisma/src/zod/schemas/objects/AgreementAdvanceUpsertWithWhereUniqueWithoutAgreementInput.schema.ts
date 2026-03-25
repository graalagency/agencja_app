import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { AgreementAdvanceWhereUniqueInputObjectSchema as AgreementAdvanceWhereUniqueInputObjectSchema } from './AgreementAdvanceWhereUniqueInput.schema';
import { AgreementAdvanceUpdateWithoutAgreementInputObjectSchema as AgreementAdvanceUpdateWithoutAgreementInputObjectSchema } from './AgreementAdvanceUpdateWithoutAgreementInput.schema';
import { AgreementAdvanceUncheckedUpdateWithoutAgreementInputObjectSchema as AgreementAdvanceUncheckedUpdateWithoutAgreementInputObjectSchema } from './AgreementAdvanceUncheckedUpdateWithoutAgreementInput.schema';
import { AgreementAdvanceCreateWithoutAgreementInputObjectSchema as AgreementAdvanceCreateWithoutAgreementInputObjectSchema } from './AgreementAdvanceCreateWithoutAgreementInput.schema';
import { AgreementAdvanceUncheckedCreateWithoutAgreementInputObjectSchema as AgreementAdvanceUncheckedCreateWithoutAgreementInputObjectSchema } from './AgreementAdvanceUncheckedCreateWithoutAgreementInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => AgreementAdvanceWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => AgreementAdvanceUpdateWithoutAgreementInputObjectSchema), z.lazy(() => AgreementAdvanceUncheckedUpdateWithoutAgreementInputObjectSchema)]),
  create: z.union([z.lazy(() => AgreementAdvanceCreateWithoutAgreementInputObjectSchema), z.lazy(() => AgreementAdvanceUncheckedCreateWithoutAgreementInputObjectSchema)])
}).strict();
export const AgreementAdvanceUpsertWithWhereUniqueWithoutAgreementInputObjectSchema: z.ZodType<Prisma.AgreementAdvanceUpsertWithWhereUniqueWithoutAgreementInput> = makeSchema() as unknown as z.ZodType<Prisma.AgreementAdvanceUpsertWithWhereUniqueWithoutAgreementInput>;
export const AgreementAdvanceUpsertWithWhereUniqueWithoutAgreementInputObjectZodSchema = makeSchema();
