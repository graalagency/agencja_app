import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { AgreementEventWhereUniqueInputObjectSchema as AgreementEventWhereUniqueInputObjectSchema } from './AgreementEventWhereUniqueInput.schema';
import { AgreementEventUpdateWithoutAgreementInputObjectSchema as AgreementEventUpdateWithoutAgreementInputObjectSchema } from './AgreementEventUpdateWithoutAgreementInput.schema';
import { AgreementEventUncheckedUpdateWithoutAgreementInputObjectSchema as AgreementEventUncheckedUpdateWithoutAgreementInputObjectSchema } from './AgreementEventUncheckedUpdateWithoutAgreementInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => AgreementEventWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => AgreementEventUpdateWithoutAgreementInputObjectSchema), z.lazy(() => AgreementEventUncheckedUpdateWithoutAgreementInputObjectSchema)])
}).strict();
export const AgreementEventUpdateWithWhereUniqueWithoutAgreementInputObjectSchema: z.ZodType<Prisma.AgreementEventUpdateWithWhereUniqueWithoutAgreementInput> = makeSchema() as unknown as z.ZodType<Prisma.AgreementEventUpdateWithWhereUniqueWithoutAgreementInput>;
export const AgreementEventUpdateWithWhereUniqueWithoutAgreementInputObjectZodSchema = makeSchema();
