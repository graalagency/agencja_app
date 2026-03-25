import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { AgreementEventCreateWithoutAgreementInputObjectSchema as AgreementEventCreateWithoutAgreementInputObjectSchema } from './AgreementEventCreateWithoutAgreementInput.schema';
import { AgreementEventUncheckedCreateWithoutAgreementInputObjectSchema as AgreementEventUncheckedCreateWithoutAgreementInputObjectSchema } from './AgreementEventUncheckedCreateWithoutAgreementInput.schema';
import { AgreementEventCreateOrConnectWithoutAgreementInputObjectSchema as AgreementEventCreateOrConnectWithoutAgreementInputObjectSchema } from './AgreementEventCreateOrConnectWithoutAgreementInput.schema';
import { AgreementEventCreateManyAgreementInputEnvelopeObjectSchema as AgreementEventCreateManyAgreementInputEnvelopeObjectSchema } from './AgreementEventCreateManyAgreementInputEnvelope.schema';
import { AgreementEventWhereUniqueInputObjectSchema as AgreementEventWhereUniqueInputObjectSchema } from './AgreementEventWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => AgreementEventCreateWithoutAgreementInputObjectSchema), z.lazy(() => AgreementEventCreateWithoutAgreementInputObjectSchema).array(), z.lazy(() => AgreementEventUncheckedCreateWithoutAgreementInputObjectSchema), z.lazy(() => AgreementEventUncheckedCreateWithoutAgreementInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => AgreementEventCreateOrConnectWithoutAgreementInputObjectSchema), z.lazy(() => AgreementEventCreateOrConnectWithoutAgreementInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => AgreementEventCreateManyAgreementInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => AgreementEventWhereUniqueInputObjectSchema), z.lazy(() => AgreementEventWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const AgreementEventUncheckedCreateNestedManyWithoutAgreementInputObjectSchema: z.ZodType<Prisma.AgreementEventUncheckedCreateNestedManyWithoutAgreementInput> = makeSchema() as unknown as z.ZodType<Prisma.AgreementEventUncheckedCreateNestedManyWithoutAgreementInput>;
export const AgreementEventUncheckedCreateNestedManyWithoutAgreementInputObjectZodSchema = makeSchema();
