import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { AgreementRightUpdateWithoutRoyRatesInputObjectSchema as AgreementRightUpdateWithoutRoyRatesInputObjectSchema } from './AgreementRightUpdateWithoutRoyRatesInput.schema';
import { AgreementRightUncheckedUpdateWithoutRoyRatesInputObjectSchema as AgreementRightUncheckedUpdateWithoutRoyRatesInputObjectSchema } from './AgreementRightUncheckedUpdateWithoutRoyRatesInput.schema';
import { AgreementRightCreateWithoutRoyRatesInputObjectSchema as AgreementRightCreateWithoutRoyRatesInputObjectSchema } from './AgreementRightCreateWithoutRoyRatesInput.schema';
import { AgreementRightUncheckedCreateWithoutRoyRatesInputObjectSchema as AgreementRightUncheckedCreateWithoutRoyRatesInputObjectSchema } from './AgreementRightUncheckedCreateWithoutRoyRatesInput.schema';
import { AgreementRightWhereInputObjectSchema as AgreementRightWhereInputObjectSchema } from './AgreementRightWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => AgreementRightUpdateWithoutRoyRatesInputObjectSchema), z.lazy(() => AgreementRightUncheckedUpdateWithoutRoyRatesInputObjectSchema)]),
  create: z.union([z.lazy(() => AgreementRightCreateWithoutRoyRatesInputObjectSchema), z.lazy(() => AgreementRightUncheckedCreateWithoutRoyRatesInputObjectSchema)]),
  where: z.lazy(() => AgreementRightWhereInputObjectSchema).optional()
}).strict();
export const AgreementRightUpsertWithoutRoyRatesInputObjectSchema: z.ZodType<Prisma.AgreementRightUpsertWithoutRoyRatesInput> = makeSchema() as unknown as z.ZodType<Prisma.AgreementRightUpsertWithoutRoyRatesInput>;
export const AgreementRightUpsertWithoutRoyRatesInputObjectZodSchema = makeSchema();
