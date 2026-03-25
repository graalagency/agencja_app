import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { AgreementRightWhereInputObjectSchema as AgreementRightWhereInputObjectSchema } from './AgreementRightWhereInput.schema';
import { AgreementRightUpdateWithoutRoyRatesInputObjectSchema as AgreementRightUpdateWithoutRoyRatesInputObjectSchema } from './AgreementRightUpdateWithoutRoyRatesInput.schema';
import { AgreementRightUncheckedUpdateWithoutRoyRatesInputObjectSchema as AgreementRightUncheckedUpdateWithoutRoyRatesInputObjectSchema } from './AgreementRightUncheckedUpdateWithoutRoyRatesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => AgreementRightWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => AgreementRightUpdateWithoutRoyRatesInputObjectSchema), z.lazy(() => AgreementRightUncheckedUpdateWithoutRoyRatesInputObjectSchema)])
}).strict();
export const AgreementRightUpdateToOneWithWhereWithoutRoyRatesInputObjectSchema: z.ZodType<Prisma.AgreementRightUpdateToOneWithWhereWithoutRoyRatesInput> = makeSchema() as unknown as z.ZodType<Prisma.AgreementRightUpdateToOneWithWhereWithoutRoyRatesInput>;
export const AgreementRightUpdateToOneWithWhereWithoutRoyRatesInputObjectZodSchema = makeSchema();
