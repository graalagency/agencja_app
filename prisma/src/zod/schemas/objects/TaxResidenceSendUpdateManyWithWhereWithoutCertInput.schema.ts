import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TaxResidenceSendScalarWhereInputObjectSchema as TaxResidenceSendScalarWhereInputObjectSchema } from './TaxResidenceSendScalarWhereInput.schema';
import { TaxResidenceSendUpdateManyMutationInputObjectSchema as TaxResidenceSendUpdateManyMutationInputObjectSchema } from './TaxResidenceSendUpdateManyMutationInput.schema';
import { TaxResidenceSendUncheckedUpdateManyWithoutCertInputObjectSchema as TaxResidenceSendUncheckedUpdateManyWithoutCertInputObjectSchema } from './TaxResidenceSendUncheckedUpdateManyWithoutCertInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TaxResidenceSendScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => TaxResidenceSendUpdateManyMutationInputObjectSchema), z.lazy(() => TaxResidenceSendUncheckedUpdateManyWithoutCertInputObjectSchema)])
}).strict();
export const TaxResidenceSendUpdateManyWithWhereWithoutCertInputObjectSchema: z.ZodType<Prisma.TaxResidenceSendUpdateManyWithWhereWithoutCertInput> = makeSchema() as unknown as z.ZodType<Prisma.TaxResidenceSendUpdateManyWithWhereWithoutCertInput>;
export const TaxResidenceSendUpdateManyWithWhereWithoutCertInputObjectZodSchema = makeSchema();
