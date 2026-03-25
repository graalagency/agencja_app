import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { AgreementRoyRateScalarWhereInputObjectSchema as AgreementRoyRateScalarWhereInputObjectSchema } from './AgreementRoyRateScalarWhereInput.schema';
import { AgreementRoyRateUpdateManyMutationInputObjectSchema as AgreementRoyRateUpdateManyMutationInputObjectSchema } from './AgreementRoyRateUpdateManyMutationInput.schema';
import { AgreementRoyRateUncheckedUpdateManyWithoutAgreementInputObjectSchema as AgreementRoyRateUncheckedUpdateManyWithoutAgreementInputObjectSchema } from './AgreementRoyRateUncheckedUpdateManyWithoutAgreementInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => AgreementRoyRateScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => AgreementRoyRateUpdateManyMutationInputObjectSchema), z.lazy(() => AgreementRoyRateUncheckedUpdateManyWithoutAgreementInputObjectSchema)])
}).strict();
export const AgreementRoyRateUpdateManyWithWhereWithoutAgreementInputObjectSchema: z.ZodType<Prisma.AgreementRoyRateUpdateManyWithWhereWithoutAgreementInput> = makeSchema() as unknown as z.ZodType<Prisma.AgreementRoyRateUpdateManyWithWhereWithoutAgreementInput>;
export const AgreementRoyRateUpdateManyWithWhereWithoutAgreementInputObjectZodSchema = makeSchema();
