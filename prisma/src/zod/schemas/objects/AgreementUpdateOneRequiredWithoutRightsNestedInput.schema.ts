import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { AgreementCreateWithoutRightsInputObjectSchema as AgreementCreateWithoutRightsInputObjectSchema } from './AgreementCreateWithoutRightsInput.schema';
import { AgreementUncheckedCreateWithoutRightsInputObjectSchema as AgreementUncheckedCreateWithoutRightsInputObjectSchema } from './AgreementUncheckedCreateWithoutRightsInput.schema';
import { AgreementCreateOrConnectWithoutRightsInputObjectSchema as AgreementCreateOrConnectWithoutRightsInputObjectSchema } from './AgreementCreateOrConnectWithoutRightsInput.schema';
import { AgreementUpsertWithoutRightsInputObjectSchema as AgreementUpsertWithoutRightsInputObjectSchema } from './AgreementUpsertWithoutRightsInput.schema';
import { AgreementWhereUniqueInputObjectSchema as AgreementWhereUniqueInputObjectSchema } from './AgreementWhereUniqueInput.schema';
import { AgreementUpdateToOneWithWhereWithoutRightsInputObjectSchema as AgreementUpdateToOneWithWhereWithoutRightsInputObjectSchema } from './AgreementUpdateToOneWithWhereWithoutRightsInput.schema';
import { AgreementUpdateWithoutRightsInputObjectSchema as AgreementUpdateWithoutRightsInputObjectSchema } from './AgreementUpdateWithoutRightsInput.schema';
import { AgreementUncheckedUpdateWithoutRightsInputObjectSchema as AgreementUncheckedUpdateWithoutRightsInputObjectSchema } from './AgreementUncheckedUpdateWithoutRightsInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => AgreementCreateWithoutRightsInputObjectSchema), z.lazy(() => AgreementUncheckedCreateWithoutRightsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => AgreementCreateOrConnectWithoutRightsInputObjectSchema).optional(),
  upsert: z.lazy(() => AgreementUpsertWithoutRightsInputObjectSchema).optional(),
  connect: z.lazy(() => AgreementWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => AgreementUpdateToOneWithWhereWithoutRightsInputObjectSchema), z.lazy(() => AgreementUpdateWithoutRightsInputObjectSchema), z.lazy(() => AgreementUncheckedUpdateWithoutRightsInputObjectSchema)]).optional()
}).strict();
export const AgreementUpdateOneRequiredWithoutRightsNestedInputObjectSchema: z.ZodType<Prisma.AgreementUpdateOneRequiredWithoutRightsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.AgreementUpdateOneRequiredWithoutRightsNestedInput>;
export const AgreementUpdateOneRequiredWithoutRightsNestedInputObjectZodSchema = makeSchema();
