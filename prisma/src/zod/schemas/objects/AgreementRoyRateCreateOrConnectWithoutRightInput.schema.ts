import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { AgreementRoyRateWhereUniqueInputObjectSchema as AgreementRoyRateWhereUniqueInputObjectSchema } from './AgreementRoyRateWhereUniqueInput.schema';
import { AgreementRoyRateCreateWithoutRightInputObjectSchema as AgreementRoyRateCreateWithoutRightInputObjectSchema } from './AgreementRoyRateCreateWithoutRightInput.schema';
import { AgreementRoyRateUncheckedCreateWithoutRightInputObjectSchema as AgreementRoyRateUncheckedCreateWithoutRightInputObjectSchema } from './AgreementRoyRateUncheckedCreateWithoutRightInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => AgreementRoyRateWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => AgreementRoyRateCreateWithoutRightInputObjectSchema), z.lazy(() => AgreementRoyRateUncheckedCreateWithoutRightInputObjectSchema)])
}).strict();
export const AgreementRoyRateCreateOrConnectWithoutRightInputObjectSchema: z.ZodType<Prisma.AgreementRoyRateCreateOrConnectWithoutRightInput> = makeSchema() as unknown as z.ZodType<Prisma.AgreementRoyRateCreateOrConnectWithoutRightInput>;
export const AgreementRoyRateCreateOrConnectWithoutRightInputObjectZodSchema = makeSchema();
