import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { AgreementRoyRateWhereUniqueInputObjectSchema as AgreementRoyRateWhereUniqueInputObjectSchema } from './AgreementRoyRateWhereUniqueInput.schema';
import { AgreementRoyRateUpdateWithoutRightInputObjectSchema as AgreementRoyRateUpdateWithoutRightInputObjectSchema } from './AgreementRoyRateUpdateWithoutRightInput.schema';
import { AgreementRoyRateUncheckedUpdateWithoutRightInputObjectSchema as AgreementRoyRateUncheckedUpdateWithoutRightInputObjectSchema } from './AgreementRoyRateUncheckedUpdateWithoutRightInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => AgreementRoyRateWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => AgreementRoyRateUpdateWithoutRightInputObjectSchema), z.lazy(() => AgreementRoyRateUncheckedUpdateWithoutRightInputObjectSchema)])
}).strict();
export const AgreementRoyRateUpdateWithWhereUniqueWithoutRightInputObjectSchema: z.ZodType<Prisma.AgreementRoyRateUpdateWithWhereUniqueWithoutRightInput> = makeSchema() as unknown as z.ZodType<Prisma.AgreementRoyRateUpdateWithWhereUniqueWithoutRightInput>;
export const AgreementRoyRateUpdateWithWhereUniqueWithoutRightInputObjectZodSchema = makeSchema();
