import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { AgreementCreateWithoutPublisherInputObjectSchema as AgreementCreateWithoutPublisherInputObjectSchema } from './AgreementCreateWithoutPublisherInput.schema';
import { AgreementUncheckedCreateWithoutPublisherInputObjectSchema as AgreementUncheckedCreateWithoutPublisherInputObjectSchema } from './AgreementUncheckedCreateWithoutPublisherInput.schema';
import { AgreementCreateOrConnectWithoutPublisherInputObjectSchema as AgreementCreateOrConnectWithoutPublisherInputObjectSchema } from './AgreementCreateOrConnectWithoutPublisherInput.schema';
import { AgreementCreateManyPublisherInputEnvelopeObjectSchema as AgreementCreateManyPublisherInputEnvelopeObjectSchema } from './AgreementCreateManyPublisherInputEnvelope.schema';
import { AgreementWhereUniqueInputObjectSchema as AgreementWhereUniqueInputObjectSchema } from './AgreementWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => AgreementCreateWithoutPublisherInputObjectSchema), z.lazy(() => AgreementCreateWithoutPublisherInputObjectSchema).array(), z.lazy(() => AgreementUncheckedCreateWithoutPublisherInputObjectSchema), z.lazy(() => AgreementUncheckedCreateWithoutPublisherInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => AgreementCreateOrConnectWithoutPublisherInputObjectSchema), z.lazy(() => AgreementCreateOrConnectWithoutPublisherInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => AgreementCreateManyPublisherInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => AgreementWhereUniqueInputObjectSchema), z.lazy(() => AgreementWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const AgreementCreateNestedManyWithoutPublisherInputObjectSchema: z.ZodType<Prisma.AgreementCreateNestedManyWithoutPublisherInput> = makeSchema() as unknown as z.ZodType<Prisma.AgreementCreateNestedManyWithoutPublisherInput>;
export const AgreementCreateNestedManyWithoutPublisherInputObjectZodSchema = makeSchema();
