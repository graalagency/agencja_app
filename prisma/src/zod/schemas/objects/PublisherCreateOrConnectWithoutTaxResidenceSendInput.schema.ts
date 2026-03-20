import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { PublisherWhereUniqueInputObjectSchema as PublisherWhereUniqueInputObjectSchema } from './PublisherWhereUniqueInput.schema';
import { PublisherCreateWithoutTaxResidenceSendInputObjectSchema as PublisherCreateWithoutTaxResidenceSendInputObjectSchema } from './PublisherCreateWithoutTaxResidenceSendInput.schema';
import { PublisherUncheckedCreateWithoutTaxResidenceSendInputObjectSchema as PublisherUncheckedCreateWithoutTaxResidenceSendInputObjectSchema } from './PublisherUncheckedCreateWithoutTaxResidenceSendInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => PublisherWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => PublisherCreateWithoutTaxResidenceSendInputObjectSchema), z.lazy(() => PublisherUncheckedCreateWithoutTaxResidenceSendInputObjectSchema)])
}).strict();
export const PublisherCreateOrConnectWithoutTaxResidenceSendInputObjectSchema: z.ZodType<Prisma.PublisherCreateOrConnectWithoutTaxResidenceSendInput> = makeSchema() as unknown as z.ZodType<Prisma.PublisherCreateOrConnectWithoutTaxResidenceSendInput>;
export const PublisherCreateOrConnectWithoutTaxResidenceSendInputObjectZodSchema = makeSchema();
