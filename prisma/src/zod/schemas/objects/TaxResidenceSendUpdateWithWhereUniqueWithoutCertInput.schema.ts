import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TaxResidenceSendWhereUniqueInputObjectSchema as TaxResidenceSendWhereUniqueInputObjectSchema } from './TaxResidenceSendWhereUniqueInput.schema';
import { TaxResidenceSendUpdateWithoutCertInputObjectSchema as TaxResidenceSendUpdateWithoutCertInputObjectSchema } from './TaxResidenceSendUpdateWithoutCertInput.schema';
import { TaxResidenceSendUncheckedUpdateWithoutCertInputObjectSchema as TaxResidenceSendUncheckedUpdateWithoutCertInputObjectSchema } from './TaxResidenceSendUncheckedUpdateWithoutCertInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TaxResidenceSendWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => TaxResidenceSendUpdateWithoutCertInputObjectSchema), z.lazy(() => TaxResidenceSendUncheckedUpdateWithoutCertInputObjectSchema)])
}).strict();
export const TaxResidenceSendUpdateWithWhereUniqueWithoutCertInputObjectSchema: z.ZodType<Prisma.TaxResidenceSendUpdateWithWhereUniqueWithoutCertInput> = makeSchema() as unknown as z.ZodType<Prisma.TaxResidenceSendUpdateWithWhereUniqueWithoutCertInput>;
export const TaxResidenceSendUpdateWithWhereUniqueWithoutCertInputObjectZodSchema = makeSchema();
