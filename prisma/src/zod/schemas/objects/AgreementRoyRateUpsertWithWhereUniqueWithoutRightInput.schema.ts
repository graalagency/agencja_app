import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { AgreementRoyRateWhereUniqueInputObjectSchema as AgreementRoyRateWhereUniqueInputObjectSchema } from './AgreementRoyRateWhereUniqueInput.schema';
import { AgreementRoyRateUpdateWithoutRightInputObjectSchema as AgreementRoyRateUpdateWithoutRightInputObjectSchema } from './AgreementRoyRateUpdateWithoutRightInput.schema';
import { AgreementRoyRateUncheckedUpdateWithoutRightInputObjectSchema as AgreementRoyRateUncheckedUpdateWithoutRightInputObjectSchema } from './AgreementRoyRateUncheckedUpdateWithoutRightInput.schema';
import { AgreementRoyRateCreateWithoutRightInputObjectSchema as AgreementRoyRateCreateWithoutRightInputObjectSchema } from './AgreementRoyRateCreateWithoutRightInput.schema';
import { AgreementRoyRateUncheckedCreateWithoutRightInputObjectSchema as AgreementRoyRateUncheckedCreateWithoutRightInputObjectSchema } from './AgreementRoyRateUncheckedCreateWithoutRightInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => AgreementRoyRateWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => AgreementRoyRateUpdateWithoutRightInputObjectSchema), z.lazy(() => AgreementRoyRateUncheckedUpdateWithoutRightInputObjectSchema)]),
  create: z.union([z.lazy(() => AgreementRoyRateCreateWithoutRightInputObjectSchema), z.lazy(() => AgreementRoyRateUncheckedCreateWithoutRightInputObjectSchema)])
}).strict();
export const AgreementRoyRateUpsertWithWhereUniqueWithoutRightInputObjectSchema: z.ZodType<Prisma.AgreementRoyRateUpsertWithWhereUniqueWithoutRightInput> = makeSchema() as unknown as z.ZodType<Prisma.AgreementRoyRateUpsertWithWhereUniqueWithoutRightInput>;
export const AgreementRoyRateUpsertWithWhereUniqueWithoutRightInputObjectZodSchema = makeSchema();
