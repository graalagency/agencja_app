import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TaxResidenceCertWhereInputObjectSchema as TaxResidenceCertWhereInputObjectSchema } from './TaxResidenceCertWhereInput.schema';
import { TaxResidenceCertUpdateWithoutSendLogInputObjectSchema as TaxResidenceCertUpdateWithoutSendLogInputObjectSchema } from './TaxResidenceCertUpdateWithoutSendLogInput.schema';
import { TaxResidenceCertUncheckedUpdateWithoutSendLogInputObjectSchema as TaxResidenceCertUncheckedUpdateWithoutSendLogInputObjectSchema } from './TaxResidenceCertUncheckedUpdateWithoutSendLogInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TaxResidenceCertWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => TaxResidenceCertUpdateWithoutSendLogInputObjectSchema), z.lazy(() => TaxResidenceCertUncheckedUpdateWithoutSendLogInputObjectSchema)])
}).strict();
export const TaxResidenceCertUpdateToOneWithWhereWithoutSendLogInputObjectSchema: z.ZodType<Prisma.TaxResidenceCertUpdateToOneWithWhereWithoutSendLogInput> = makeSchema() as unknown as z.ZodType<Prisma.TaxResidenceCertUpdateToOneWithWhereWithoutSendLogInput>;
export const TaxResidenceCertUpdateToOneWithWhereWithoutSendLogInputObjectZodSchema = makeSchema();
