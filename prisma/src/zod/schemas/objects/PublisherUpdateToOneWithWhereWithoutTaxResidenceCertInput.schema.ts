import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { PublisherWhereInputObjectSchema as PublisherWhereInputObjectSchema } from './PublisherWhereInput.schema';
import { PublisherUpdateWithoutTaxResidenceCertInputObjectSchema as PublisherUpdateWithoutTaxResidenceCertInputObjectSchema } from './PublisherUpdateWithoutTaxResidenceCertInput.schema';
import { PublisherUncheckedUpdateWithoutTaxResidenceCertInputObjectSchema as PublisherUncheckedUpdateWithoutTaxResidenceCertInputObjectSchema } from './PublisherUncheckedUpdateWithoutTaxResidenceCertInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => PublisherWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => PublisherUpdateWithoutTaxResidenceCertInputObjectSchema), z.lazy(() => PublisherUncheckedUpdateWithoutTaxResidenceCertInputObjectSchema)])
}).strict();
export const PublisherUpdateToOneWithWhereWithoutTaxResidenceCertInputObjectSchema: z.ZodType<Prisma.PublisherUpdateToOneWithWhereWithoutTaxResidenceCertInput> = makeSchema() as unknown as z.ZodType<Prisma.PublisherUpdateToOneWithWhereWithoutTaxResidenceCertInput>;
export const PublisherUpdateToOneWithWhereWithoutTaxResidenceCertInputObjectZodSchema = makeSchema();
