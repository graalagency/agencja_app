import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { PublisherCreateWithoutTaxResidenceSendInputObjectSchema as PublisherCreateWithoutTaxResidenceSendInputObjectSchema } from './PublisherCreateWithoutTaxResidenceSendInput.schema';
import { PublisherUncheckedCreateWithoutTaxResidenceSendInputObjectSchema as PublisherUncheckedCreateWithoutTaxResidenceSendInputObjectSchema } from './PublisherUncheckedCreateWithoutTaxResidenceSendInput.schema';
import { PublisherCreateOrConnectWithoutTaxResidenceSendInputObjectSchema as PublisherCreateOrConnectWithoutTaxResidenceSendInputObjectSchema } from './PublisherCreateOrConnectWithoutTaxResidenceSendInput.schema';
import { PublisherWhereUniqueInputObjectSchema as PublisherWhereUniqueInputObjectSchema } from './PublisherWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => PublisherCreateWithoutTaxResidenceSendInputObjectSchema), z.lazy(() => PublisherUncheckedCreateWithoutTaxResidenceSendInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => PublisherCreateOrConnectWithoutTaxResidenceSendInputObjectSchema).optional(),
  connect: z.lazy(() => PublisherWhereUniqueInputObjectSchema).optional()
}).strict();
export const PublisherCreateNestedOneWithoutTaxResidenceSendInputObjectSchema: z.ZodType<Prisma.PublisherCreateNestedOneWithoutTaxResidenceSendInput> = makeSchema() as unknown as z.ZodType<Prisma.PublisherCreateNestedOneWithoutTaxResidenceSendInput>;
export const PublisherCreateNestedOneWithoutTaxResidenceSendInputObjectZodSchema = makeSchema();
