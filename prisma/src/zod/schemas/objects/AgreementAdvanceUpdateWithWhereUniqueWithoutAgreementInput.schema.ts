import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { AgreementAdvanceWhereUniqueInputObjectSchema as AgreementAdvanceWhereUniqueInputObjectSchema } from './AgreementAdvanceWhereUniqueInput.schema';
import { AgreementAdvanceUpdateWithoutAgreementInputObjectSchema as AgreementAdvanceUpdateWithoutAgreementInputObjectSchema } from './AgreementAdvanceUpdateWithoutAgreementInput.schema';
import { AgreementAdvanceUncheckedUpdateWithoutAgreementInputObjectSchema as AgreementAdvanceUncheckedUpdateWithoutAgreementInputObjectSchema } from './AgreementAdvanceUncheckedUpdateWithoutAgreementInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => AgreementAdvanceWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => AgreementAdvanceUpdateWithoutAgreementInputObjectSchema), z.lazy(() => AgreementAdvanceUncheckedUpdateWithoutAgreementInputObjectSchema)])
}).strict();
export const AgreementAdvanceUpdateWithWhereUniqueWithoutAgreementInputObjectSchema: z.ZodType<Prisma.AgreementAdvanceUpdateWithWhereUniqueWithoutAgreementInput> = makeSchema() as unknown as z.ZodType<Prisma.AgreementAdvanceUpdateWithWhereUniqueWithoutAgreementInput>;
export const AgreementAdvanceUpdateWithWhereUniqueWithoutAgreementInputObjectZodSchema = makeSchema();
