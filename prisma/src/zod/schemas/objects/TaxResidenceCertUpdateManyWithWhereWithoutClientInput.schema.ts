import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TaxResidenceCertScalarWhereInputObjectSchema as TaxResidenceCertScalarWhereInputObjectSchema } from './TaxResidenceCertScalarWhereInput.schema';
import { TaxResidenceCertUpdateManyMutationInputObjectSchema as TaxResidenceCertUpdateManyMutationInputObjectSchema } from './TaxResidenceCertUpdateManyMutationInput.schema';
import { TaxResidenceCertUncheckedUpdateManyWithoutClientInputObjectSchema as TaxResidenceCertUncheckedUpdateManyWithoutClientInputObjectSchema } from './TaxResidenceCertUncheckedUpdateManyWithoutClientInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TaxResidenceCertScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => TaxResidenceCertUpdateManyMutationInputObjectSchema), z.lazy(() => TaxResidenceCertUncheckedUpdateManyWithoutClientInputObjectSchema)])
}).strict();
export const TaxResidenceCertUpdateManyWithWhereWithoutClientInputObjectSchema: z.ZodType<Prisma.TaxResidenceCertUpdateManyWithWhereWithoutClientInput> = makeSchema() as unknown as z.ZodType<Prisma.TaxResidenceCertUpdateManyWithWhereWithoutClientInput>;
export const TaxResidenceCertUpdateManyWithWhereWithoutClientInputObjectZodSchema = makeSchema();
