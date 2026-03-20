import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TaxResidenceSendScalarWhereInputObjectSchema as TaxResidenceSendScalarWhereInputObjectSchema } from './TaxResidenceSendScalarWhereInput.schema';
import { TaxResidenceSendUpdateManyMutationInputObjectSchema as TaxResidenceSendUpdateManyMutationInputObjectSchema } from './TaxResidenceSendUpdateManyMutationInput.schema';
import { TaxResidenceSendUncheckedUpdateManyWithoutClientInputObjectSchema as TaxResidenceSendUncheckedUpdateManyWithoutClientInputObjectSchema } from './TaxResidenceSendUncheckedUpdateManyWithoutClientInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TaxResidenceSendScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => TaxResidenceSendUpdateManyMutationInputObjectSchema), z.lazy(() => TaxResidenceSendUncheckedUpdateManyWithoutClientInputObjectSchema)])
}).strict();
export const TaxResidenceSendUpdateManyWithWhereWithoutClientInputObjectSchema: z.ZodType<Prisma.TaxResidenceSendUpdateManyWithWhereWithoutClientInput> = makeSchema() as unknown as z.ZodType<Prisma.TaxResidenceSendUpdateManyWithWhereWithoutClientInput>;
export const TaxResidenceSendUpdateManyWithWhereWithoutClientInputObjectZodSchema = makeSchema();
