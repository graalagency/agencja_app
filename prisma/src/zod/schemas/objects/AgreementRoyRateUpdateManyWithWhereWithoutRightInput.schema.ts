import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { AgreementRoyRateScalarWhereInputObjectSchema as AgreementRoyRateScalarWhereInputObjectSchema } from './AgreementRoyRateScalarWhereInput.schema';
import { AgreementRoyRateUpdateManyMutationInputObjectSchema as AgreementRoyRateUpdateManyMutationInputObjectSchema } from './AgreementRoyRateUpdateManyMutationInput.schema';
import { AgreementRoyRateUncheckedUpdateManyWithoutRightInputObjectSchema as AgreementRoyRateUncheckedUpdateManyWithoutRightInputObjectSchema } from './AgreementRoyRateUncheckedUpdateManyWithoutRightInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => AgreementRoyRateScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => AgreementRoyRateUpdateManyMutationInputObjectSchema), z.lazy(() => AgreementRoyRateUncheckedUpdateManyWithoutRightInputObjectSchema)])
}).strict();
export const AgreementRoyRateUpdateManyWithWhereWithoutRightInputObjectSchema: z.ZodType<Prisma.AgreementRoyRateUpdateManyWithWhereWithoutRightInput> = makeSchema() as unknown as z.ZodType<Prisma.AgreementRoyRateUpdateManyWithWhereWithoutRightInput>;
export const AgreementRoyRateUpdateManyWithWhereWithoutRightInputObjectZodSchema = makeSchema();
