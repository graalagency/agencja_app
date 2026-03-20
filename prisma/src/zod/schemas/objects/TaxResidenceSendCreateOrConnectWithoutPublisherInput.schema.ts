import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TaxResidenceSendWhereUniqueInputObjectSchema as TaxResidenceSendWhereUniqueInputObjectSchema } from './TaxResidenceSendWhereUniqueInput.schema';
import { TaxResidenceSendCreateWithoutPublisherInputObjectSchema as TaxResidenceSendCreateWithoutPublisherInputObjectSchema } from './TaxResidenceSendCreateWithoutPublisherInput.schema';
import { TaxResidenceSendUncheckedCreateWithoutPublisherInputObjectSchema as TaxResidenceSendUncheckedCreateWithoutPublisherInputObjectSchema } from './TaxResidenceSendUncheckedCreateWithoutPublisherInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TaxResidenceSendWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => TaxResidenceSendCreateWithoutPublisherInputObjectSchema), z.lazy(() => TaxResidenceSendUncheckedCreateWithoutPublisherInputObjectSchema)])
}).strict();
export const TaxResidenceSendCreateOrConnectWithoutPublisherInputObjectSchema: z.ZodType<Prisma.TaxResidenceSendCreateOrConnectWithoutPublisherInput> = makeSchema() as unknown as z.ZodType<Prisma.TaxResidenceSendCreateOrConnectWithoutPublisherInput>;
export const TaxResidenceSendCreateOrConnectWithoutPublisherInputObjectZodSchema = makeSchema();
