import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { PublisherWhereUniqueInputObjectSchema as PublisherWhereUniqueInputObjectSchema } from './PublisherWhereUniqueInput.schema';
import { PublisherCreateWithoutTaxResidenceCertInputObjectSchema as PublisherCreateWithoutTaxResidenceCertInputObjectSchema } from './PublisherCreateWithoutTaxResidenceCertInput.schema';
import { PublisherUncheckedCreateWithoutTaxResidenceCertInputObjectSchema as PublisherUncheckedCreateWithoutTaxResidenceCertInputObjectSchema } from './PublisherUncheckedCreateWithoutTaxResidenceCertInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => PublisherWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => PublisherCreateWithoutTaxResidenceCertInputObjectSchema), z.lazy(() => PublisherUncheckedCreateWithoutTaxResidenceCertInputObjectSchema)])
}).strict();
export const PublisherCreateOrConnectWithoutTaxResidenceCertInputObjectSchema: z.ZodType<Prisma.PublisherCreateOrConnectWithoutTaxResidenceCertInput> = makeSchema() as unknown as z.ZodType<Prisma.PublisherCreateOrConnectWithoutTaxResidenceCertInput>;
export const PublisherCreateOrConnectWithoutTaxResidenceCertInputObjectZodSchema = makeSchema();
