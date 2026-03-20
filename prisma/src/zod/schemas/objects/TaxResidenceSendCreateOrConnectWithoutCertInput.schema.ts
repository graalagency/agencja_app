import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TaxResidenceSendWhereUniqueInputObjectSchema as TaxResidenceSendWhereUniqueInputObjectSchema } from './TaxResidenceSendWhereUniqueInput.schema';
import { TaxResidenceSendCreateWithoutCertInputObjectSchema as TaxResidenceSendCreateWithoutCertInputObjectSchema } from './TaxResidenceSendCreateWithoutCertInput.schema';
import { TaxResidenceSendUncheckedCreateWithoutCertInputObjectSchema as TaxResidenceSendUncheckedCreateWithoutCertInputObjectSchema } from './TaxResidenceSendUncheckedCreateWithoutCertInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TaxResidenceSendWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => TaxResidenceSendCreateWithoutCertInputObjectSchema), z.lazy(() => TaxResidenceSendUncheckedCreateWithoutCertInputObjectSchema)])
}).strict();
export const TaxResidenceSendCreateOrConnectWithoutCertInputObjectSchema: z.ZodType<Prisma.TaxResidenceSendCreateOrConnectWithoutCertInput> = makeSchema() as unknown as z.ZodType<Prisma.TaxResidenceSendCreateOrConnectWithoutCertInput>;
export const TaxResidenceSendCreateOrConnectWithoutCertInputObjectZodSchema = makeSchema();
