import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TaxResidenceCertScalarWhereInputObjectSchema as TaxResidenceCertScalarWhereInputObjectSchema } from './TaxResidenceCertScalarWhereInput.schema';
import { TaxResidenceCertUpdateManyMutationInputObjectSchema as TaxResidenceCertUpdateManyMutationInputObjectSchema } from './TaxResidenceCertUpdateManyMutationInput.schema';
import { TaxResidenceCertUncheckedUpdateManyWithoutPublisherInputObjectSchema as TaxResidenceCertUncheckedUpdateManyWithoutPublisherInputObjectSchema } from './TaxResidenceCertUncheckedUpdateManyWithoutPublisherInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TaxResidenceCertScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => TaxResidenceCertUpdateManyMutationInputObjectSchema), z.lazy(() => TaxResidenceCertUncheckedUpdateManyWithoutPublisherInputObjectSchema)])
}).strict();
export const TaxResidenceCertUpdateManyWithWhereWithoutPublisherInputObjectSchema: z.ZodType<Prisma.TaxResidenceCertUpdateManyWithWhereWithoutPublisherInput> = makeSchema() as unknown as z.ZodType<Prisma.TaxResidenceCertUpdateManyWithWhereWithoutPublisherInput>;
export const TaxResidenceCertUpdateManyWithWhereWithoutPublisherInputObjectZodSchema = makeSchema();
