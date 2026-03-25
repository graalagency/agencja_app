import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { AgreementAdvanceCreateWithoutAgreementInputObjectSchema as AgreementAdvanceCreateWithoutAgreementInputObjectSchema } from './AgreementAdvanceCreateWithoutAgreementInput.schema';
import { AgreementAdvanceUncheckedCreateWithoutAgreementInputObjectSchema as AgreementAdvanceUncheckedCreateWithoutAgreementInputObjectSchema } from './AgreementAdvanceUncheckedCreateWithoutAgreementInput.schema';
import { AgreementAdvanceCreateOrConnectWithoutAgreementInputObjectSchema as AgreementAdvanceCreateOrConnectWithoutAgreementInputObjectSchema } from './AgreementAdvanceCreateOrConnectWithoutAgreementInput.schema';
import { AgreementAdvanceCreateManyAgreementInputEnvelopeObjectSchema as AgreementAdvanceCreateManyAgreementInputEnvelopeObjectSchema } from './AgreementAdvanceCreateManyAgreementInputEnvelope.schema';
import { AgreementAdvanceWhereUniqueInputObjectSchema as AgreementAdvanceWhereUniqueInputObjectSchema } from './AgreementAdvanceWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => AgreementAdvanceCreateWithoutAgreementInputObjectSchema), z.lazy(() => AgreementAdvanceCreateWithoutAgreementInputObjectSchema).array(), z.lazy(() => AgreementAdvanceUncheckedCreateWithoutAgreementInputObjectSchema), z.lazy(() => AgreementAdvanceUncheckedCreateWithoutAgreementInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => AgreementAdvanceCreateOrConnectWithoutAgreementInputObjectSchema), z.lazy(() => AgreementAdvanceCreateOrConnectWithoutAgreementInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => AgreementAdvanceCreateManyAgreementInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => AgreementAdvanceWhereUniqueInputObjectSchema), z.lazy(() => AgreementAdvanceWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const AgreementAdvanceCreateNestedManyWithoutAgreementInputObjectSchema: z.ZodType<Prisma.AgreementAdvanceCreateNestedManyWithoutAgreementInput> = makeSchema() as unknown as z.ZodType<Prisma.AgreementAdvanceCreateNestedManyWithoutAgreementInput>;
export const AgreementAdvanceCreateNestedManyWithoutAgreementInputObjectZodSchema = makeSchema();
