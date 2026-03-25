import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { AgreementUpdateWithoutRoyRatesInputObjectSchema as AgreementUpdateWithoutRoyRatesInputObjectSchema } from './AgreementUpdateWithoutRoyRatesInput.schema';
import { AgreementUncheckedUpdateWithoutRoyRatesInputObjectSchema as AgreementUncheckedUpdateWithoutRoyRatesInputObjectSchema } from './AgreementUncheckedUpdateWithoutRoyRatesInput.schema';
import { AgreementCreateWithoutRoyRatesInputObjectSchema as AgreementCreateWithoutRoyRatesInputObjectSchema } from './AgreementCreateWithoutRoyRatesInput.schema';
import { AgreementUncheckedCreateWithoutRoyRatesInputObjectSchema as AgreementUncheckedCreateWithoutRoyRatesInputObjectSchema } from './AgreementUncheckedCreateWithoutRoyRatesInput.schema';
import { AgreementWhereInputObjectSchema as AgreementWhereInputObjectSchema } from './AgreementWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => AgreementUpdateWithoutRoyRatesInputObjectSchema), z.lazy(() => AgreementUncheckedUpdateWithoutRoyRatesInputObjectSchema)]),
  create: z.union([z.lazy(() => AgreementCreateWithoutRoyRatesInputObjectSchema), z.lazy(() => AgreementUncheckedCreateWithoutRoyRatesInputObjectSchema)]),
  where: z.lazy(() => AgreementWhereInputObjectSchema).optional()
}).strict();
export const AgreementUpsertWithoutRoyRatesInputObjectSchema: z.ZodType<Prisma.AgreementUpsertWithoutRoyRatesInput> = makeSchema() as unknown as z.ZodType<Prisma.AgreementUpsertWithoutRoyRatesInput>;
export const AgreementUpsertWithoutRoyRatesInputObjectZodSchema = makeSchema();
