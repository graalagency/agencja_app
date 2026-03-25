import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { AgreementWhereUniqueInputObjectSchema as AgreementWhereUniqueInputObjectSchema } from './AgreementWhereUniqueInput.schema';
import { AgreementCreateWithoutPublisherInputObjectSchema as AgreementCreateWithoutPublisherInputObjectSchema } from './AgreementCreateWithoutPublisherInput.schema';
import { AgreementUncheckedCreateWithoutPublisherInputObjectSchema as AgreementUncheckedCreateWithoutPublisherInputObjectSchema } from './AgreementUncheckedCreateWithoutPublisherInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => AgreementWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => AgreementCreateWithoutPublisherInputObjectSchema), z.lazy(() => AgreementUncheckedCreateWithoutPublisherInputObjectSchema)])
}).strict();
export const AgreementCreateOrConnectWithoutPublisherInputObjectSchema: z.ZodType<Prisma.AgreementCreateOrConnectWithoutPublisherInput> = makeSchema() as unknown as z.ZodType<Prisma.AgreementCreateOrConnectWithoutPublisherInput>;
export const AgreementCreateOrConnectWithoutPublisherInputObjectZodSchema = makeSchema();
