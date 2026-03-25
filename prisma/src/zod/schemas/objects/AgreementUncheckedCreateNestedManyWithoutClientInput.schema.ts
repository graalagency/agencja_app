import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { AgreementCreateWithoutClientInputObjectSchema as AgreementCreateWithoutClientInputObjectSchema } from './AgreementCreateWithoutClientInput.schema';
import { AgreementUncheckedCreateWithoutClientInputObjectSchema as AgreementUncheckedCreateWithoutClientInputObjectSchema } from './AgreementUncheckedCreateWithoutClientInput.schema';
import { AgreementCreateOrConnectWithoutClientInputObjectSchema as AgreementCreateOrConnectWithoutClientInputObjectSchema } from './AgreementCreateOrConnectWithoutClientInput.schema';
import { AgreementCreateManyClientInputEnvelopeObjectSchema as AgreementCreateManyClientInputEnvelopeObjectSchema } from './AgreementCreateManyClientInputEnvelope.schema';
import { AgreementWhereUniqueInputObjectSchema as AgreementWhereUniqueInputObjectSchema } from './AgreementWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => AgreementCreateWithoutClientInputObjectSchema), z.lazy(() => AgreementCreateWithoutClientInputObjectSchema).array(), z.lazy(() => AgreementUncheckedCreateWithoutClientInputObjectSchema), z.lazy(() => AgreementUncheckedCreateWithoutClientInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => AgreementCreateOrConnectWithoutClientInputObjectSchema), z.lazy(() => AgreementCreateOrConnectWithoutClientInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => AgreementCreateManyClientInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => AgreementWhereUniqueInputObjectSchema), z.lazy(() => AgreementWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const AgreementUncheckedCreateNestedManyWithoutClientInputObjectSchema: z.ZodType<Prisma.AgreementUncheckedCreateNestedManyWithoutClientInput> = makeSchema() as unknown as z.ZodType<Prisma.AgreementUncheckedCreateNestedManyWithoutClientInput>;
export const AgreementUncheckedCreateNestedManyWithoutClientInputObjectZodSchema = makeSchema();
