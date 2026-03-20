import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { PublisherCreateWithoutTaxResidenceCertInputObjectSchema as PublisherCreateWithoutTaxResidenceCertInputObjectSchema } from './PublisherCreateWithoutTaxResidenceCertInput.schema';
import { PublisherUncheckedCreateWithoutTaxResidenceCertInputObjectSchema as PublisherUncheckedCreateWithoutTaxResidenceCertInputObjectSchema } from './PublisherUncheckedCreateWithoutTaxResidenceCertInput.schema';
import { PublisherCreateOrConnectWithoutTaxResidenceCertInputObjectSchema as PublisherCreateOrConnectWithoutTaxResidenceCertInputObjectSchema } from './PublisherCreateOrConnectWithoutTaxResidenceCertInput.schema';
import { PublisherWhereUniqueInputObjectSchema as PublisherWhereUniqueInputObjectSchema } from './PublisherWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => PublisherCreateWithoutTaxResidenceCertInputObjectSchema), z.lazy(() => PublisherUncheckedCreateWithoutTaxResidenceCertInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => PublisherCreateOrConnectWithoutTaxResidenceCertInputObjectSchema).optional(),
  connect: z.lazy(() => PublisherWhereUniqueInputObjectSchema).optional()
}).strict();
export const PublisherCreateNestedOneWithoutTaxResidenceCertInputObjectSchema: z.ZodType<Prisma.PublisherCreateNestedOneWithoutTaxResidenceCertInput> = makeSchema() as unknown as z.ZodType<Prisma.PublisherCreateNestedOneWithoutTaxResidenceCertInput>;
export const PublisherCreateNestedOneWithoutTaxResidenceCertInputObjectZodSchema = makeSchema();
