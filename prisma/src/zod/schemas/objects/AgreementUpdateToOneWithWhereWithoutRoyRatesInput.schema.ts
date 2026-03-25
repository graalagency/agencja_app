import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { AgreementWhereInputObjectSchema as AgreementWhereInputObjectSchema } from './AgreementWhereInput.schema';
import { AgreementUpdateWithoutRoyRatesInputObjectSchema as AgreementUpdateWithoutRoyRatesInputObjectSchema } from './AgreementUpdateWithoutRoyRatesInput.schema';
import { AgreementUncheckedUpdateWithoutRoyRatesInputObjectSchema as AgreementUncheckedUpdateWithoutRoyRatesInputObjectSchema } from './AgreementUncheckedUpdateWithoutRoyRatesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => AgreementWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => AgreementUpdateWithoutRoyRatesInputObjectSchema), z.lazy(() => AgreementUncheckedUpdateWithoutRoyRatesInputObjectSchema)])
}).strict();
export const AgreementUpdateToOneWithWhereWithoutRoyRatesInputObjectSchema: z.ZodType<Prisma.AgreementUpdateToOneWithWhereWithoutRoyRatesInput> = makeSchema() as unknown as z.ZodType<Prisma.AgreementUpdateToOneWithWhereWithoutRoyRatesInput>;
export const AgreementUpdateToOneWithWhereWithoutRoyRatesInputObjectZodSchema = makeSchema();
