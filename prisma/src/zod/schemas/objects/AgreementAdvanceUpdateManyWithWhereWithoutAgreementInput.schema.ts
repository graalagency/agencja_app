import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { AgreementAdvanceScalarWhereInputObjectSchema as AgreementAdvanceScalarWhereInputObjectSchema } from './AgreementAdvanceScalarWhereInput.schema';
import { AgreementAdvanceUpdateManyMutationInputObjectSchema as AgreementAdvanceUpdateManyMutationInputObjectSchema } from './AgreementAdvanceUpdateManyMutationInput.schema';
import { AgreementAdvanceUncheckedUpdateManyWithoutAgreementInputObjectSchema as AgreementAdvanceUncheckedUpdateManyWithoutAgreementInputObjectSchema } from './AgreementAdvanceUncheckedUpdateManyWithoutAgreementInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => AgreementAdvanceScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => AgreementAdvanceUpdateManyMutationInputObjectSchema), z.lazy(() => AgreementAdvanceUncheckedUpdateManyWithoutAgreementInputObjectSchema)])
}).strict();
export const AgreementAdvanceUpdateManyWithWhereWithoutAgreementInputObjectSchema: z.ZodType<Prisma.AgreementAdvanceUpdateManyWithWhereWithoutAgreementInput> = makeSchema() as unknown as z.ZodType<Prisma.AgreementAdvanceUpdateManyWithWhereWithoutAgreementInput>;
export const AgreementAdvanceUpdateManyWithWhereWithoutAgreementInputObjectZodSchema = makeSchema();
