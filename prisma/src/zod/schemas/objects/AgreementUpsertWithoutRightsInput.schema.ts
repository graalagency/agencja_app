import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { AgreementUpdateWithoutRightsInputObjectSchema as AgreementUpdateWithoutRightsInputObjectSchema } from './AgreementUpdateWithoutRightsInput.schema';
import { AgreementUncheckedUpdateWithoutRightsInputObjectSchema as AgreementUncheckedUpdateWithoutRightsInputObjectSchema } from './AgreementUncheckedUpdateWithoutRightsInput.schema';
import { AgreementCreateWithoutRightsInputObjectSchema as AgreementCreateWithoutRightsInputObjectSchema } from './AgreementCreateWithoutRightsInput.schema';
import { AgreementUncheckedCreateWithoutRightsInputObjectSchema as AgreementUncheckedCreateWithoutRightsInputObjectSchema } from './AgreementUncheckedCreateWithoutRightsInput.schema';
import { AgreementWhereInputObjectSchema as AgreementWhereInputObjectSchema } from './AgreementWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => AgreementUpdateWithoutRightsInputObjectSchema), z.lazy(() => AgreementUncheckedUpdateWithoutRightsInputObjectSchema)]),
  create: z.union([z.lazy(() => AgreementCreateWithoutRightsInputObjectSchema), z.lazy(() => AgreementUncheckedCreateWithoutRightsInputObjectSchema)]),
  where: z.lazy(() => AgreementWhereInputObjectSchema).optional()
}).strict();
export const AgreementUpsertWithoutRightsInputObjectSchema: z.ZodType<Prisma.AgreementUpsertWithoutRightsInput> = makeSchema() as unknown as z.ZodType<Prisma.AgreementUpsertWithoutRightsInput>;
export const AgreementUpsertWithoutRightsInputObjectZodSchema = makeSchema();
