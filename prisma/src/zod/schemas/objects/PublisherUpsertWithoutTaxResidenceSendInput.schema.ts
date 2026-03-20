import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { PublisherUpdateWithoutTaxResidenceSendInputObjectSchema as PublisherUpdateWithoutTaxResidenceSendInputObjectSchema } from './PublisherUpdateWithoutTaxResidenceSendInput.schema';
import { PublisherUncheckedUpdateWithoutTaxResidenceSendInputObjectSchema as PublisherUncheckedUpdateWithoutTaxResidenceSendInputObjectSchema } from './PublisherUncheckedUpdateWithoutTaxResidenceSendInput.schema';
import { PublisherCreateWithoutTaxResidenceSendInputObjectSchema as PublisherCreateWithoutTaxResidenceSendInputObjectSchema } from './PublisherCreateWithoutTaxResidenceSendInput.schema';
import { PublisherUncheckedCreateWithoutTaxResidenceSendInputObjectSchema as PublisherUncheckedCreateWithoutTaxResidenceSendInputObjectSchema } from './PublisherUncheckedCreateWithoutTaxResidenceSendInput.schema';
import { PublisherWhereInputObjectSchema as PublisherWhereInputObjectSchema } from './PublisherWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => PublisherUpdateWithoutTaxResidenceSendInputObjectSchema), z.lazy(() => PublisherUncheckedUpdateWithoutTaxResidenceSendInputObjectSchema)]),
  create: z.union([z.lazy(() => PublisherCreateWithoutTaxResidenceSendInputObjectSchema), z.lazy(() => PublisherUncheckedCreateWithoutTaxResidenceSendInputObjectSchema)]),
  where: z.lazy(() => PublisherWhereInputObjectSchema).optional()
}).strict();
export const PublisherUpsertWithoutTaxResidenceSendInputObjectSchema: z.ZodType<Prisma.PublisherUpsertWithoutTaxResidenceSendInput> = makeSchema() as unknown as z.ZodType<Prisma.PublisherUpsertWithoutTaxResidenceSendInput>;
export const PublisherUpsertWithoutTaxResidenceSendInputObjectZodSchema = makeSchema();
