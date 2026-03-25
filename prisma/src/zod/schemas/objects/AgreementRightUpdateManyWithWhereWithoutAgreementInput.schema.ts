import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { AgreementRightScalarWhereInputObjectSchema as AgreementRightScalarWhereInputObjectSchema } from './AgreementRightScalarWhereInput.schema';
import { AgreementRightUpdateManyMutationInputObjectSchema as AgreementRightUpdateManyMutationInputObjectSchema } from './AgreementRightUpdateManyMutationInput.schema';
import { AgreementRightUncheckedUpdateManyWithoutAgreementInputObjectSchema as AgreementRightUncheckedUpdateManyWithoutAgreementInputObjectSchema } from './AgreementRightUncheckedUpdateManyWithoutAgreementInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => AgreementRightScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => AgreementRightUpdateManyMutationInputObjectSchema), z.lazy(() => AgreementRightUncheckedUpdateManyWithoutAgreementInputObjectSchema)])
}).strict();
export const AgreementRightUpdateManyWithWhereWithoutAgreementInputObjectSchema: z.ZodType<Prisma.AgreementRightUpdateManyWithWhereWithoutAgreementInput> = makeSchema() as unknown as z.ZodType<Prisma.AgreementRightUpdateManyWithWhereWithoutAgreementInput>;
export const AgreementRightUpdateManyWithWhereWithoutAgreementInputObjectZodSchema = makeSchema();
