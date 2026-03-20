import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { PublisherWhereInputObjectSchema as PublisherWhereInputObjectSchema } from './PublisherWhereInput.schema';
import { PublisherUpdateWithoutTaxResidenceSendInputObjectSchema as PublisherUpdateWithoutTaxResidenceSendInputObjectSchema } from './PublisherUpdateWithoutTaxResidenceSendInput.schema';
import { PublisherUncheckedUpdateWithoutTaxResidenceSendInputObjectSchema as PublisherUncheckedUpdateWithoutTaxResidenceSendInputObjectSchema } from './PublisherUncheckedUpdateWithoutTaxResidenceSendInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => PublisherWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => PublisherUpdateWithoutTaxResidenceSendInputObjectSchema), z.lazy(() => PublisherUncheckedUpdateWithoutTaxResidenceSendInputObjectSchema)])
}).strict();
export const PublisherUpdateToOneWithWhereWithoutTaxResidenceSendInputObjectSchema: z.ZodType<Prisma.PublisherUpdateToOneWithWhereWithoutTaxResidenceSendInput> = makeSchema() as unknown as z.ZodType<Prisma.PublisherUpdateToOneWithWhereWithoutTaxResidenceSendInput>;
export const PublisherUpdateToOneWithWhereWithoutTaxResidenceSendInputObjectZodSchema = makeSchema();
