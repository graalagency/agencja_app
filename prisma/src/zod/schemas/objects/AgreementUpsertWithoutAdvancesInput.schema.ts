import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { AgreementUpdateWithoutAdvancesInputObjectSchema as AgreementUpdateWithoutAdvancesInputObjectSchema } from './AgreementUpdateWithoutAdvancesInput.schema';
import { AgreementUncheckedUpdateWithoutAdvancesInputObjectSchema as AgreementUncheckedUpdateWithoutAdvancesInputObjectSchema } from './AgreementUncheckedUpdateWithoutAdvancesInput.schema';
import { AgreementCreateWithoutAdvancesInputObjectSchema as AgreementCreateWithoutAdvancesInputObjectSchema } from './AgreementCreateWithoutAdvancesInput.schema';
import { AgreementUncheckedCreateWithoutAdvancesInputObjectSchema as AgreementUncheckedCreateWithoutAdvancesInputObjectSchema } from './AgreementUncheckedCreateWithoutAdvancesInput.schema';
import { AgreementWhereInputObjectSchema as AgreementWhereInputObjectSchema } from './AgreementWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => AgreementUpdateWithoutAdvancesInputObjectSchema), z.lazy(() => AgreementUncheckedUpdateWithoutAdvancesInputObjectSchema)]),
  create: z.union([z.lazy(() => AgreementCreateWithoutAdvancesInputObjectSchema), z.lazy(() => AgreementUncheckedCreateWithoutAdvancesInputObjectSchema)]),
  where: z.lazy(() => AgreementWhereInputObjectSchema).optional()
}).strict();
export const AgreementUpsertWithoutAdvancesInputObjectSchema: z.ZodType<Prisma.AgreementUpsertWithoutAdvancesInput> = makeSchema() as unknown as z.ZodType<Prisma.AgreementUpsertWithoutAdvancesInput>;
export const AgreementUpsertWithoutAdvancesInputObjectZodSchema = makeSchema();
