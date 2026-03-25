import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { AgreementEventScalarWhereInputObjectSchema as AgreementEventScalarWhereInputObjectSchema } from './AgreementEventScalarWhereInput.schema';
import { AgreementEventUpdateManyMutationInputObjectSchema as AgreementEventUpdateManyMutationInputObjectSchema } from './AgreementEventUpdateManyMutationInput.schema';
import { AgreementEventUncheckedUpdateManyWithoutAgreementInputObjectSchema as AgreementEventUncheckedUpdateManyWithoutAgreementInputObjectSchema } from './AgreementEventUncheckedUpdateManyWithoutAgreementInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => AgreementEventScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => AgreementEventUpdateManyMutationInputObjectSchema), z.lazy(() => AgreementEventUncheckedUpdateManyWithoutAgreementInputObjectSchema)])
}).strict();
export const AgreementEventUpdateManyWithWhereWithoutAgreementInputObjectSchema: z.ZodType<Prisma.AgreementEventUpdateManyWithWhereWithoutAgreementInput> = makeSchema() as unknown as z.ZodType<Prisma.AgreementEventUpdateManyWithWhereWithoutAgreementInput>;
export const AgreementEventUpdateManyWithWhereWithoutAgreementInputObjectZodSchema = makeSchema();
