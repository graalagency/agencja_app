import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { PublisherCreateWithoutTaxResidenceCertInputObjectSchema as PublisherCreateWithoutTaxResidenceCertInputObjectSchema } from './PublisherCreateWithoutTaxResidenceCertInput.schema';
import { PublisherUncheckedCreateWithoutTaxResidenceCertInputObjectSchema as PublisherUncheckedCreateWithoutTaxResidenceCertInputObjectSchema } from './PublisherUncheckedCreateWithoutTaxResidenceCertInput.schema';
import { PublisherCreateOrConnectWithoutTaxResidenceCertInputObjectSchema as PublisherCreateOrConnectWithoutTaxResidenceCertInputObjectSchema } from './PublisherCreateOrConnectWithoutTaxResidenceCertInput.schema';
import { PublisherUpsertWithoutTaxResidenceCertInputObjectSchema as PublisherUpsertWithoutTaxResidenceCertInputObjectSchema } from './PublisherUpsertWithoutTaxResidenceCertInput.schema';
import { PublisherWhereInputObjectSchema as PublisherWhereInputObjectSchema } from './PublisherWhereInput.schema';
import { PublisherWhereUniqueInputObjectSchema as PublisherWhereUniqueInputObjectSchema } from './PublisherWhereUniqueInput.schema';
import { PublisherUpdateToOneWithWhereWithoutTaxResidenceCertInputObjectSchema as PublisherUpdateToOneWithWhereWithoutTaxResidenceCertInputObjectSchema } from './PublisherUpdateToOneWithWhereWithoutTaxResidenceCertInput.schema';
import { PublisherUpdateWithoutTaxResidenceCertInputObjectSchema as PublisherUpdateWithoutTaxResidenceCertInputObjectSchema } from './PublisherUpdateWithoutTaxResidenceCertInput.schema';
import { PublisherUncheckedUpdateWithoutTaxResidenceCertInputObjectSchema as PublisherUncheckedUpdateWithoutTaxResidenceCertInputObjectSchema } from './PublisherUncheckedUpdateWithoutTaxResidenceCertInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => PublisherCreateWithoutTaxResidenceCertInputObjectSchema), z.lazy(() => PublisherUncheckedCreateWithoutTaxResidenceCertInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => PublisherCreateOrConnectWithoutTaxResidenceCertInputObjectSchema).optional(),
  upsert: z.lazy(() => PublisherUpsertWithoutTaxResidenceCertInputObjectSchema).optional(),
  disconnect: z.union([z.boolean(), z.lazy(() => PublisherWhereInputObjectSchema)]).optional(),
  delete: z.union([z.boolean(), z.lazy(() => PublisherWhereInputObjectSchema)]).optional(),
  connect: z.lazy(() => PublisherWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => PublisherUpdateToOneWithWhereWithoutTaxResidenceCertInputObjectSchema), z.lazy(() => PublisherUpdateWithoutTaxResidenceCertInputObjectSchema), z.lazy(() => PublisherUncheckedUpdateWithoutTaxResidenceCertInputObjectSchema)]).optional()
}).strict();
export const PublisherUpdateOneWithoutTaxResidenceCertNestedInputObjectSchema: z.ZodType<Prisma.PublisherUpdateOneWithoutTaxResidenceCertNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.PublisherUpdateOneWithoutTaxResidenceCertNestedInput>;
export const PublisherUpdateOneWithoutTaxResidenceCertNestedInputObjectZodSchema = makeSchema();
