import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { AgreementRoyRateCreateWithoutRightInputObjectSchema as AgreementRoyRateCreateWithoutRightInputObjectSchema } from './AgreementRoyRateCreateWithoutRightInput.schema';
import { AgreementRoyRateUncheckedCreateWithoutRightInputObjectSchema as AgreementRoyRateUncheckedCreateWithoutRightInputObjectSchema } from './AgreementRoyRateUncheckedCreateWithoutRightInput.schema';
import { AgreementRoyRateCreateOrConnectWithoutRightInputObjectSchema as AgreementRoyRateCreateOrConnectWithoutRightInputObjectSchema } from './AgreementRoyRateCreateOrConnectWithoutRightInput.schema';
import { AgreementRoyRateCreateManyRightInputEnvelopeObjectSchema as AgreementRoyRateCreateManyRightInputEnvelopeObjectSchema } from './AgreementRoyRateCreateManyRightInputEnvelope.schema';
import { AgreementRoyRateWhereUniqueInputObjectSchema as AgreementRoyRateWhereUniqueInputObjectSchema } from './AgreementRoyRateWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => AgreementRoyRateCreateWithoutRightInputObjectSchema), z.lazy(() => AgreementRoyRateCreateWithoutRightInputObjectSchema).array(), z.lazy(() => AgreementRoyRateUncheckedCreateWithoutRightInputObjectSchema), z.lazy(() => AgreementRoyRateUncheckedCreateWithoutRightInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => AgreementRoyRateCreateOrConnectWithoutRightInputObjectSchema), z.lazy(() => AgreementRoyRateCreateOrConnectWithoutRightInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => AgreementRoyRateCreateManyRightInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => AgreementRoyRateWhereUniqueInputObjectSchema), z.lazy(() => AgreementRoyRateWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const AgreementRoyRateCreateNestedManyWithoutRightInputObjectSchema: z.ZodType<Prisma.AgreementRoyRateCreateNestedManyWithoutRightInput> = makeSchema() as unknown as z.ZodType<Prisma.AgreementRoyRateCreateNestedManyWithoutRightInput>;
export const AgreementRoyRateCreateNestedManyWithoutRightInputObjectZodSchema = makeSchema();
