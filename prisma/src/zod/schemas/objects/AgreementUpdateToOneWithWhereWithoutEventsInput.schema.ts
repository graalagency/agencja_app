import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { AgreementWhereInputObjectSchema as AgreementWhereInputObjectSchema } from './AgreementWhereInput.schema';
import { AgreementUpdateWithoutEventsInputObjectSchema as AgreementUpdateWithoutEventsInputObjectSchema } from './AgreementUpdateWithoutEventsInput.schema';
import { AgreementUncheckedUpdateWithoutEventsInputObjectSchema as AgreementUncheckedUpdateWithoutEventsInputObjectSchema } from './AgreementUncheckedUpdateWithoutEventsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => AgreementWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => AgreementUpdateWithoutEventsInputObjectSchema), z.lazy(() => AgreementUncheckedUpdateWithoutEventsInputObjectSchema)])
}).strict();
export const AgreementUpdateToOneWithWhereWithoutEventsInputObjectSchema: z.ZodType<Prisma.AgreementUpdateToOneWithWhereWithoutEventsInput> = makeSchema() as unknown as z.ZodType<Prisma.AgreementUpdateToOneWithWhereWithoutEventsInput>;
export const AgreementUpdateToOneWithWhereWithoutEventsInputObjectZodSchema = makeSchema();
