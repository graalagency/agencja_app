import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { AgreementWhereInputObjectSchema as AgreementWhereInputObjectSchema } from './AgreementWhereInput.schema';
import { AgreementUpdateWithoutAdvancesInputObjectSchema as AgreementUpdateWithoutAdvancesInputObjectSchema } from './AgreementUpdateWithoutAdvancesInput.schema';
import { AgreementUncheckedUpdateWithoutAdvancesInputObjectSchema as AgreementUncheckedUpdateWithoutAdvancesInputObjectSchema } from './AgreementUncheckedUpdateWithoutAdvancesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => AgreementWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => AgreementUpdateWithoutAdvancesInputObjectSchema), z.lazy(() => AgreementUncheckedUpdateWithoutAdvancesInputObjectSchema)])
}).strict();
export const AgreementUpdateToOneWithWhereWithoutAdvancesInputObjectSchema: z.ZodType<Prisma.AgreementUpdateToOneWithWhereWithoutAdvancesInput> = makeSchema() as unknown as z.ZodType<Prisma.AgreementUpdateToOneWithWhereWithoutAdvancesInput>;
export const AgreementUpdateToOneWithWhereWithoutAdvancesInputObjectZodSchema = makeSchema();
