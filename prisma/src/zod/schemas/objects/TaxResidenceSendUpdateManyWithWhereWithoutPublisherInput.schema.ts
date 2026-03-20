import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TaxResidenceSendScalarWhereInputObjectSchema as TaxResidenceSendScalarWhereInputObjectSchema } from './TaxResidenceSendScalarWhereInput.schema';
import { TaxResidenceSendUpdateManyMutationInputObjectSchema as TaxResidenceSendUpdateManyMutationInputObjectSchema } from './TaxResidenceSendUpdateManyMutationInput.schema';
import { TaxResidenceSendUncheckedUpdateManyWithoutPublisherInputObjectSchema as TaxResidenceSendUncheckedUpdateManyWithoutPublisherInputObjectSchema } from './TaxResidenceSendUncheckedUpdateManyWithoutPublisherInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TaxResidenceSendScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => TaxResidenceSendUpdateManyMutationInputObjectSchema), z.lazy(() => TaxResidenceSendUncheckedUpdateManyWithoutPublisherInputObjectSchema)])
}).strict();
export const TaxResidenceSendUpdateManyWithWhereWithoutPublisherInputObjectSchema: z.ZodType<Prisma.TaxResidenceSendUpdateManyWithWhereWithoutPublisherInput> = makeSchema() as unknown as z.ZodType<Prisma.TaxResidenceSendUpdateManyWithWhereWithoutPublisherInput>;
export const TaxResidenceSendUpdateManyWithWhereWithoutPublisherInputObjectZodSchema = makeSchema();
