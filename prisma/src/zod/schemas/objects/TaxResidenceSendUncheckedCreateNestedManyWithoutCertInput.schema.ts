import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TaxResidenceSendCreateWithoutCertInputObjectSchema as TaxResidenceSendCreateWithoutCertInputObjectSchema } from './TaxResidenceSendCreateWithoutCertInput.schema';
import { TaxResidenceSendUncheckedCreateWithoutCertInputObjectSchema as TaxResidenceSendUncheckedCreateWithoutCertInputObjectSchema } from './TaxResidenceSendUncheckedCreateWithoutCertInput.schema';
import { TaxResidenceSendCreateOrConnectWithoutCertInputObjectSchema as TaxResidenceSendCreateOrConnectWithoutCertInputObjectSchema } from './TaxResidenceSendCreateOrConnectWithoutCertInput.schema';
import { TaxResidenceSendCreateManyCertInputEnvelopeObjectSchema as TaxResidenceSendCreateManyCertInputEnvelopeObjectSchema } from './TaxResidenceSendCreateManyCertInputEnvelope.schema';
import { TaxResidenceSendWhereUniqueInputObjectSchema as TaxResidenceSendWhereUniqueInputObjectSchema } from './TaxResidenceSendWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => TaxResidenceSendCreateWithoutCertInputObjectSchema), z.lazy(() => TaxResidenceSendCreateWithoutCertInputObjectSchema).array(), z.lazy(() => TaxResidenceSendUncheckedCreateWithoutCertInputObjectSchema), z.lazy(() => TaxResidenceSendUncheckedCreateWithoutCertInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => TaxResidenceSendCreateOrConnectWithoutCertInputObjectSchema), z.lazy(() => TaxResidenceSendCreateOrConnectWithoutCertInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => TaxResidenceSendCreateManyCertInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => TaxResidenceSendWhereUniqueInputObjectSchema), z.lazy(() => TaxResidenceSendWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const TaxResidenceSendUncheckedCreateNestedManyWithoutCertInputObjectSchema: z.ZodType<Prisma.TaxResidenceSendUncheckedCreateNestedManyWithoutCertInput> = makeSchema() as unknown as z.ZodType<Prisma.TaxResidenceSendUncheckedCreateNestedManyWithoutCertInput>;
export const TaxResidenceSendUncheckedCreateNestedManyWithoutCertInputObjectZodSchema = makeSchema();
