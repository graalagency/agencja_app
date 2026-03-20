import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { PublisherUpdateWithoutTaxResidenceCertInputObjectSchema as PublisherUpdateWithoutTaxResidenceCertInputObjectSchema } from './PublisherUpdateWithoutTaxResidenceCertInput.schema';
import { PublisherUncheckedUpdateWithoutTaxResidenceCertInputObjectSchema as PublisherUncheckedUpdateWithoutTaxResidenceCertInputObjectSchema } from './PublisherUncheckedUpdateWithoutTaxResidenceCertInput.schema';
import { PublisherCreateWithoutTaxResidenceCertInputObjectSchema as PublisherCreateWithoutTaxResidenceCertInputObjectSchema } from './PublisherCreateWithoutTaxResidenceCertInput.schema';
import { PublisherUncheckedCreateWithoutTaxResidenceCertInputObjectSchema as PublisherUncheckedCreateWithoutTaxResidenceCertInputObjectSchema } from './PublisherUncheckedCreateWithoutTaxResidenceCertInput.schema';
import { PublisherWhereInputObjectSchema as PublisherWhereInputObjectSchema } from './PublisherWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => PublisherUpdateWithoutTaxResidenceCertInputObjectSchema), z.lazy(() => PublisherUncheckedUpdateWithoutTaxResidenceCertInputObjectSchema)]),
  create: z.union([z.lazy(() => PublisherCreateWithoutTaxResidenceCertInputObjectSchema), z.lazy(() => PublisherUncheckedCreateWithoutTaxResidenceCertInputObjectSchema)]),
  where: z.lazy(() => PublisherWhereInputObjectSchema).optional()
}).strict();
export const PublisherUpsertWithoutTaxResidenceCertInputObjectSchema: z.ZodType<Prisma.PublisherUpsertWithoutTaxResidenceCertInput> = makeSchema() as unknown as z.ZodType<Prisma.PublisherUpsertWithoutTaxResidenceCertInput>;
export const PublisherUpsertWithoutTaxResidenceCertInputObjectZodSchema = makeSchema();
