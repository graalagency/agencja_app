import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { AgreementScalarWhereInputObjectSchema as AgreementScalarWhereInputObjectSchema } from './AgreementScalarWhereInput.schema';
import { AgreementUpdateManyMutationInputObjectSchema as AgreementUpdateManyMutationInputObjectSchema } from './AgreementUpdateManyMutationInput.schema';
import { AgreementUncheckedUpdateManyWithoutPublisherInputObjectSchema as AgreementUncheckedUpdateManyWithoutPublisherInputObjectSchema } from './AgreementUncheckedUpdateManyWithoutPublisherInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => AgreementScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => AgreementUpdateManyMutationInputObjectSchema), z.lazy(() => AgreementUncheckedUpdateManyWithoutPublisherInputObjectSchema)])
}).strict();
export const AgreementUpdateManyWithWhereWithoutPublisherInputObjectSchema: z.ZodType<Prisma.AgreementUpdateManyWithWhereWithoutPublisherInput> = makeSchema() as unknown as z.ZodType<Prisma.AgreementUpdateManyWithWhereWithoutPublisherInput>;
export const AgreementUpdateManyWithWhereWithoutPublisherInputObjectZodSchema = makeSchema();
