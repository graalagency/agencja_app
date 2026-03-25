import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { AgreementWhereInputObjectSchema as AgreementWhereInputObjectSchema } from './AgreementWhereInput.schema';
import { AgreementUpdateWithoutRightsInputObjectSchema as AgreementUpdateWithoutRightsInputObjectSchema } from './AgreementUpdateWithoutRightsInput.schema';
import { AgreementUncheckedUpdateWithoutRightsInputObjectSchema as AgreementUncheckedUpdateWithoutRightsInputObjectSchema } from './AgreementUncheckedUpdateWithoutRightsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => AgreementWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => AgreementUpdateWithoutRightsInputObjectSchema), z.lazy(() => AgreementUncheckedUpdateWithoutRightsInputObjectSchema)])
}).strict();
export const AgreementUpdateToOneWithWhereWithoutRightsInputObjectSchema: z.ZodType<Prisma.AgreementUpdateToOneWithWhereWithoutRightsInput> = makeSchema() as unknown as z.ZodType<Prisma.AgreementUpdateToOneWithWhereWithoutRightsInput>;
export const AgreementUpdateToOneWithWhereWithoutRightsInputObjectZodSchema = makeSchema();
