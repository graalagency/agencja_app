import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { AgreementCreateWithoutAdvancesInputObjectSchema as AgreementCreateWithoutAdvancesInputObjectSchema } from './AgreementCreateWithoutAdvancesInput.schema';
import { AgreementUncheckedCreateWithoutAdvancesInputObjectSchema as AgreementUncheckedCreateWithoutAdvancesInputObjectSchema } from './AgreementUncheckedCreateWithoutAdvancesInput.schema';
import { AgreementCreateOrConnectWithoutAdvancesInputObjectSchema as AgreementCreateOrConnectWithoutAdvancesInputObjectSchema } from './AgreementCreateOrConnectWithoutAdvancesInput.schema';
import { AgreementUpsertWithoutAdvancesInputObjectSchema as AgreementUpsertWithoutAdvancesInputObjectSchema } from './AgreementUpsertWithoutAdvancesInput.schema';
import { AgreementWhereUniqueInputObjectSchema as AgreementWhereUniqueInputObjectSchema } from './AgreementWhereUniqueInput.schema';
import { AgreementUpdateToOneWithWhereWithoutAdvancesInputObjectSchema as AgreementUpdateToOneWithWhereWithoutAdvancesInputObjectSchema } from './AgreementUpdateToOneWithWhereWithoutAdvancesInput.schema';
import { AgreementUpdateWithoutAdvancesInputObjectSchema as AgreementUpdateWithoutAdvancesInputObjectSchema } from './AgreementUpdateWithoutAdvancesInput.schema';
import { AgreementUncheckedUpdateWithoutAdvancesInputObjectSchema as AgreementUncheckedUpdateWithoutAdvancesInputObjectSchema } from './AgreementUncheckedUpdateWithoutAdvancesInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => AgreementCreateWithoutAdvancesInputObjectSchema), z.lazy(() => AgreementUncheckedCreateWithoutAdvancesInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => AgreementCreateOrConnectWithoutAdvancesInputObjectSchema).optional(),
  upsert: z.lazy(() => AgreementUpsertWithoutAdvancesInputObjectSchema).optional(),
  connect: z.lazy(() => AgreementWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => AgreementUpdateToOneWithWhereWithoutAdvancesInputObjectSchema), z.lazy(() => AgreementUpdateWithoutAdvancesInputObjectSchema), z.lazy(() => AgreementUncheckedUpdateWithoutAdvancesInputObjectSchema)]).optional()
}).strict();
export const AgreementUpdateOneRequiredWithoutAdvancesNestedInputObjectSchema: z.ZodType<Prisma.AgreementUpdateOneRequiredWithoutAdvancesNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.AgreementUpdateOneRequiredWithoutAdvancesNestedInput>;
export const AgreementUpdateOneRequiredWithoutAdvancesNestedInputObjectZodSchema = makeSchema();
