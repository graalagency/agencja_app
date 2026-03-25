import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { AgreementScalarWhereInputObjectSchema as AgreementScalarWhereInputObjectSchema } from './AgreementScalarWhereInput.schema';
import { AgreementUpdateManyMutationInputObjectSchema as AgreementUpdateManyMutationInputObjectSchema } from './AgreementUpdateManyMutationInput.schema';
import { AgreementUncheckedUpdateManyWithoutTitleInputObjectSchema as AgreementUncheckedUpdateManyWithoutTitleInputObjectSchema } from './AgreementUncheckedUpdateManyWithoutTitleInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => AgreementScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => AgreementUpdateManyMutationInputObjectSchema), z.lazy(() => AgreementUncheckedUpdateManyWithoutTitleInputObjectSchema)])
}).strict();
export const AgreementUpdateManyWithWhereWithoutTitleInputObjectSchema: z.ZodType<Prisma.AgreementUpdateManyWithWhereWithoutTitleInput> = makeSchema() as unknown as z.ZodType<Prisma.AgreementUpdateManyWithWhereWithoutTitleInput>;
export const AgreementUpdateManyWithWhereWithoutTitleInputObjectZodSchema = makeSchema();
