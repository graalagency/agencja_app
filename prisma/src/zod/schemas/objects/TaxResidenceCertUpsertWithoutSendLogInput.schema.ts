import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TaxResidenceCertUpdateWithoutSendLogInputObjectSchema as TaxResidenceCertUpdateWithoutSendLogInputObjectSchema } from './TaxResidenceCertUpdateWithoutSendLogInput.schema';
import { TaxResidenceCertUncheckedUpdateWithoutSendLogInputObjectSchema as TaxResidenceCertUncheckedUpdateWithoutSendLogInputObjectSchema } from './TaxResidenceCertUncheckedUpdateWithoutSendLogInput.schema';
import { TaxResidenceCertCreateWithoutSendLogInputObjectSchema as TaxResidenceCertCreateWithoutSendLogInputObjectSchema } from './TaxResidenceCertCreateWithoutSendLogInput.schema';
import { TaxResidenceCertUncheckedCreateWithoutSendLogInputObjectSchema as TaxResidenceCertUncheckedCreateWithoutSendLogInputObjectSchema } from './TaxResidenceCertUncheckedCreateWithoutSendLogInput.schema';
import { TaxResidenceCertWhereInputObjectSchema as TaxResidenceCertWhereInputObjectSchema } from './TaxResidenceCertWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => TaxResidenceCertUpdateWithoutSendLogInputObjectSchema), z.lazy(() => TaxResidenceCertUncheckedUpdateWithoutSendLogInputObjectSchema)]),
  create: z.union([z.lazy(() => TaxResidenceCertCreateWithoutSendLogInputObjectSchema), z.lazy(() => TaxResidenceCertUncheckedCreateWithoutSendLogInputObjectSchema)]),
  where: z.lazy(() => TaxResidenceCertWhereInputObjectSchema).optional()
}).strict();
export const TaxResidenceCertUpsertWithoutSendLogInputObjectSchema: z.ZodType<Prisma.TaxResidenceCertUpsertWithoutSendLogInput> = makeSchema() as unknown as z.ZodType<Prisma.TaxResidenceCertUpsertWithoutSendLogInput>;
export const TaxResidenceCertUpsertWithoutSendLogInputObjectZodSchema = makeSchema();
