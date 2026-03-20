import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TaxResidenceCertWhereUniqueInputObjectSchema as TaxResidenceCertWhereUniqueInputObjectSchema } from './TaxResidenceCertWhereUniqueInput.schema';
import { TaxResidenceCertCreateWithoutSendLogInputObjectSchema as TaxResidenceCertCreateWithoutSendLogInputObjectSchema } from './TaxResidenceCertCreateWithoutSendLogInput.schema';
import { TaxResidenceCertUncheckedCreateWithoutSendLogInputObjectSchema as TaxResidenceCertUncheckedCreateWithoutSendLogInputObjectSchema } from './TaxResidenceCertUncheckedCreateWithoutSendLogInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TaxResidenceCertWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => TaxResidenceCertCreateWithoutSendLogInputObjectSchema), z.lazy(() => TaxResidenceCertUncheckedCreateWithoutSendLogInputObjectSchema)])
}).strict();
export const TaxResidenceCertCreateOrConnectWithoutSendLogInputObjectSchema: z.ZodType<Prisma.TaxResidenceCertCreateOrConnectWithoutSendLogInput> = makeSchema() as unknown as z.ZodType<Prisma.TaxResidenceCertCreateOrConnectWithoutSendLogInput>;
export const TaxResidenceCertCreateOrConnectWithoutSendLogInputObjectZodSchema = makeSchema();
