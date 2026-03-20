import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TaxResidenceSendWhereUniqueInputObjectSchema as TaxResidenceSendWhereUniqueInputObjectSchema } from './TaxResidenceSendWhereUniqueInput.schema';
import { TaxResidenceSendUpdateWithoutCertInputObjectSchema as TaxResidenceSendUpdateWithoutCertInputObjectSchema } from './TaxResidenceSendUpdateWithoutCertInput.schema';
import { TaxResidenceSendUncheckedUpdateWithoutCertInputObjectSchema as TaxResidenceSendUncheckedUpdateWithoutCertInputObjectSchema } from './TaxResidenceSendUncheckedUpdateWithoutCertInput.schema';
import { TaxResidenceSendCreateWithoutCertInputObjectSchema as TaxResidenceSendCreateWithoutCertInputObjectSchema } from './TaxResidenceSendCreateWithoutCertInput.schema';
import { TaxResidenceSendUncheckedCreateWithoutCertInputObjectSchema as TaxResidenceSendUncheckedCreateWithoutCertInputObjectSchema } from './TaxResidenceSendUncheckedCreateWithoutCertInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TaxResidenceSendWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => TaxResidenceSendUpdateWithoutCertInputObjectSchema), z.lazy(() => TaxResidenceSendUncheckedUpdateWithoutCertInputObjectSchema)]),
  create: z.union([z.lazy(() => TaxResidenceSendCreateWithoutCertInputObjectSchema), z.lazy(() => TaxResidenceSendUncheckedCreateWithoutCertInputObjectSchema)])
}).strict();
export const TaxResidenceSendUpsertWithWhereUniqueWithoutCertInputObjectSchema: z.ZodType<Prisma.TaxResidenceSendUpsertWithWhereUniqueWithoutCertInput> = makeSchema() as unknown as z.ZodType<Prisma.TaxResidenceSendUpsertWithWhereUniqueWithoutCertInput>;
export const TaxResidenceSendUpsertWithWhereUniqueWithoutCertInputObjectZodSchema = makeSchema();
