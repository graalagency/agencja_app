import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TaxResidenceSendCreateWithoutClientInputObjectSchema as TaxResidenceSendCreateWithoutClientInputObjectSchema } from './TaxResidenceSendCreateWithoutClientInput.schema';
import { TaxResidenceSendUncheckedCreateWithoutClientInputObjectSchema as TaxResidenceSendUncheckedCreateWithoutClientInputObjectSchema } from './TaxResidenceSendUncheckedCreateWithoutClientInput.schema';
import { TaxResidenceSendCreateOrConnectWithoutClientInputObjectSchema as TaxResidenceSendCreateOrConnectWithoutClientInputObjectSchema } from './TaxResidenceSendCreateOrConnectWithoutClientInput.schema';
import { TaxResidenceSendCreateManyClientInputEnvelopeObjectSchema as TaxResidenceSendCreateManyClientInputEnvelopeObjectSchema } from './TaxResidenceSendCreateManyClientInputEnvelope.schema';
import { TaxResidenceSendWhereUniqueInputObjectSchema as TaxResidenceSendWhereUniqueInputObjectSchema } from './TaxResidenceSendWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => TaxResidenceSendCreateWithoutClientInputObjectSchema), z.lazy(() => TaxResidenceSendCreateWithoutClientInputObjectSchema).array(), z.lazy(() => TaxResidenceSendUncheckedCreateWithoutClientInputObjectSchema), z.lazy(() => TaxResidenceSendUncheckedCreateWithoutClientInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => TaxResidenceSendCreateOrConnectWithoutClientInputObjectSchema), z.lazy(() => TaxResidenceSendCreateOrConnectWithoutClientInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => TaxResidenceSendCreateManyClientInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => TaxResidenceSendWhereUniqueInputObjectSchema), z.lazy(() => TaxResidenceSendWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const TaxResidenceSendCreateNestedManyWithoutClientInputObjectSchema: z.ZodType<Prisma.TaxResidenceSendCreateNestedManyWithoutClientInput> = makeSchema() as unknown as z.ZodType<Prisma.TaxResidenceSendCreateNestedManyWithoutClientInput>;
export const TaxResidenceSendCreateNestedManyWithoutClientInputObjectZodSchema = makeSchema();
