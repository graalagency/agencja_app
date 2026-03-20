import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TaxResidenceCertCreateWithoutSendLogInputObjectSchema as TaxResidenceCertCreateWithoutSendLogInputObjectSchema } from './TaxResidenceCertCreateWithoutSendLogInput.schema';
import { TaxResidenceCertUncheckedCreateWithoutSendLogInputObjectSchema as TaxResidenceCertUncheckedCreateWithoutSendLogInputObjectSchema } from './TaxResidenceCertUncheckedCreateWithoutSendLogInput.schema';
import { TaxResidenceCertCreateOrConnectWithoutSendLogInputObjectSchema as TaxResidenceCertCreateOrConnectWithoutSendLogInputObjectSchema } from './TaxResidenceCertCreateOrConnectWithoutSendLogInput.schema';
import { TaxResidenceCertWhereUniqueInputObjectSchema as TaxResidenceCertWhereUniqueInputObjectSchema } from './TaxResidenceCertWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => TaxResidenceCertCreateWithoutSendLogInputObjectSchema), z.lazy(() => TaxResidenceCertUncheckedCreateWithoutSendLogInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => TaxResidenceCertCreateOrConnectWithoutSendLogInputObjectSchema).optional(),
  connect: z.lazy(() => TaxResidenceCertWhereUniqueInputObjectSchema).optional()
}).strict();
export const TaxResidenceCertCreateNestedOneWithoutSendLogInputObjectSchema: z.ZodType<Prisma.TaxResidenceCertCreateNestedOneWithoutSendLogInput> = makeSchema() as unknown as z.ZodType<Prisma.TaxResidenceCertCreateNestedOneWithoutSendLogInput>;
export const TaxResidenceCertCreateNestedOneWithoutSendLogInputObjectZodSchema = makeSchema();
