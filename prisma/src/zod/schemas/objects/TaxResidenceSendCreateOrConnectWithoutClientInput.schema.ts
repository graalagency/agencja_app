import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TaxResidenceSendWhereUniqueInputObjectSchema as TaxResidenceSendWhereUniqueInputObjectSchema } from './TaxResidenceSendWhereUniqueInput.schema';
import { TaxResidenceSendCreateWithoutClientInputObjectSchema as TaxResidenceSendCreateWithoutClientInputObjectSchema } from './TaxResidenceSendCreateWithoutClientInput.schema';
import { TaxResidenceSendUncheckedCreateWithoutClientInputObjectSchema as TaxResidenceSendUncheckedCreateWithoutClientInputObjectSchema } from './TaxResidenceSendUncheckedCreateWithoutClientInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TaxResidenceSendWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => TaxResidenceSendCreateWithoutClientInputObjectSchema), z.lazy(() => TaxResidenceSendUncheckedCreateWithoutClientInputObjectSchema)])
}).strict();
export const TaxResidenceSendCreateOrConnectWithoutClientInputObjectSchema: z.ZodType<Prisma.TaxResidenceSendCreateOrConnectWithoutClientInput> = makeSchema() as unknown as z.ZodType<Prisma.TaxResidenceSendCreateOrConnectWithoutClientInput>;
export const TaxResidenceSendCreateOrConnectWithoutClientInputObjectZodSchema = makeSchema();
