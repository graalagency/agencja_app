import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { AgreementScalarWhereInputObjectSchema as AgreementScalarWhereInputObjectSchema } from './AgreementScalarWhereInput.schema';
import { AgreementUpdateManyMutationInputObjectSchema as AgreementUpdateManyMutationInputObjectSchema } from './AgreementUpdateManyMutationInput.schema';
import { AgreementUncheckedUpdateManyWithoutClientInputObjectSchema as AgreementUncheckedUpdateManyWithoutClientInputObjectSchema } from './AgreementUncheckedUpdateManyWithoutClientInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => AgreementScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => AgreementUpdateManyMutationInputObjectSchema), z.lazy(() => AgreementUncheckedUpdateManyWithoutClientInputObjectSchema)])
}).strict();
export const AgreementUpdateManyWithWhereWithoutClientInputObjectSchema: z.ZodType<Prisma.AgreementUpdateManyWithWhereWithoutClientInput> = makeSchema() as unknown as z.ZodType<Prisma.AgreementUpdateManyWithWhereWithoutClientInput>;
export const AgreementUpdateManyWithWhereWithoutClientInputObjectZodSchema = makeSchema();
