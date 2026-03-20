import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TaxResidenceSendCreateWithoutPublisherInputObjectSchema as TaxResidenceSendCreateWithoutPublisherInputObjectSchema } from './TaxResidenceSendCreateWithoutPublisherInput.schema';
import { TaxResidenceSendUncheckedCreateWithoutPublisherInputObjectSchema as TaxResidenceSendUncheckedCreateWithoutPublisherInputObjectSchema } from './TaxResidenceSendUncheckedCreateWithoutPublisherInput.schema';
import { TaxResidenceSendCreateOrConnectWithoutPublisherInputObjectSchema as TaxResidenceSendCreateOrConnectWithoutPublisherInputObjectSchema } from './TaxResidenceSendCreateOrConnectWithoutPublisherInput.schema';
import { TaxResidenceSendCreateManyPublisherInputEnvelopeObjectSchema as TaxResidenceSendCreateManyPublisherInputEnvelopeObjectSchema } from './TaxResidenceSendCreateManyPublisherInputEnvelope.schema';
import { TaxResidenceSendWhereUniqueInputObjectSchema as TaxResidenceSendWhereUniqueInputObjectSchema } from './TaxResidenceSendWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => TaxResidenceSendCreateWithoutPublisherInputObjectSchema), z.lazy(() => TaxResidenceSendCreateWithoutPublisherInputObjectSchema).array(), z.lazy(() => TaxResidenceSendUncheckedCreateWithoutPublisherInputObjectSchema), z.lazy(() => TaxResidenceSendUncheckedCreateWithoutPublisherInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => TaxResidenceSendCreateOrConnectWithoutPublisherInputObjectSchema), z.lazy(() => TaxResidenceSendCreateOrConnectWithoutPublisherInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => TaxResidenceSendCreateManyPublisherInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => TaxResidenceSendWhereUniqueInputObjectSchema), z.lazy(() => TaxResidenceSendWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const TaxResidenceSendCreateNestedManyWithoutPublisherInputObjectSchema: z.ZodType<Prisma.TaxResidenceSendCreateNestedManyWithoutPublisherInput> = makeSchema() as unknown as z.ZodType<Prisma.TaxResidenceSendCreateNestedManyWithoutPublisherInput>;
export const TaxResidenceSendCreateNestedManyWithoutPublisherInputObjectZodSchema = makeSchema();
