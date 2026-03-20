import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { PublisherCreateWithoutTaxResidenceSendInputObjectSchema as PublisherCreateWithoutTaxResidenceSendInputObjectSchema } from './PublisherCreateWithoutTaxResidenceSendInput.schema';
import { PublisherUncheckedCreateWithoutTaxResidenceSendInputObjectSchema as PublisherUncheckedCreateWithoutTaxResidenceSendInputObjectSchema } from './PublisherUncheckedCreateWithoutTaxResidenceSendInput.schema';
import { PublisherCreateOrConnectWithoutTaxResidenceSendInputObjectSchema as PublisherCreateOrConnectWithoutTaxResidenceSendInputObjectSchema } from './PublisherCreateOrConnectWithoutTaxResidenceSendInput.schema';
import { PublisherUpsertWithoutTaxResidenceSendInputObjectSchema as PublisherUpsertWithoutTaxResidenceSendInputObjectSchema } from './PublisherUpsertWithoutTaxResidenceSendInput.schema';
import { PublisherWhereInputObjectSchema as PublisherWhereInputObjectSchema } from './PublisherWhereInput.schema';
import { PublisherWhereUniqueInputObjectSchema as PublisherWhereUniqueInputObjectSchema } from './PublisherWhereUniqueInput.schema';
import { PublisherUpdateToOneWithWhereWithoutTaxResidenceSendInputObjectSchema as PublisherUpdateToOneWithWhereWithoutTaxResidenceSendInputObjectSchema } from './PublisherUpdateToOneWithWhereWithoutTaxResidenceSendInput.schema';
import { PublisherUpdateWithoutTaxResidenceSendInputObjectSchema as PublisherUpdateWithoutTaxResidenceSendInputObjectSchema } from './PublisherUpdateWithoutTaxResidenceSendInput.schema';
import { PublisherUncheckedUpdateWithoutTaxResidenceSendInputObjectSchema as PublisherUncheckedUpdateWithoutTaxResidenceSendInputObjectSchema } from './PublisherUncheckedUpdateWithoutTaxResidenceSendInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => PublisherCreateWithoutTaxResidenceSendInputObjectSchema), z.lazy(() => PublisherUncheckedCreateWithoutTaxResidenceSendInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => PublisherCreateOrConnectWithoutTaxResidenceSendInputObjectSchema).optional(),
  upsert: z.lazy(() => PublisherUpsertWithoutTaxResidenceSendInputObjectSchema).optional(),
  disconnect: z.union([z.boolean(), z.lazy(() => PublisherWhereInputObjectSchema)]).optional(),
  delete: z.union([z.boolean(), z.lazy(() => PublisherWhereInputObjectSchema)]).optional(),
  connect: z.lazy(() => PublisherWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => PublisherUpdateToOneWithWhereWithoutTaxResidenceSendInputObjectSchema), z.lazy(() => PublisherUpdateWithoutTaxResidenceSendInputObjectSchema), z.lazy(() => PublisherUncheckedUpdateWithoutTaxResidenceSendInputObjectSchema)]).optional()
}).strict();
export const PublisherUpdateOneWithoutTaxResidenceSendNestedInputObjectSchema: z.ZodType<Prisma.PublisherUpdateOneWithoutTaxResidenceSendNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.PublisherUpdateOneWithoutTaxResidenceSendNestedInput>;
export const PublisherUpdateOneWithoutTaxResidenceSendNestedInputObjectZodSchema = makeSchema();
