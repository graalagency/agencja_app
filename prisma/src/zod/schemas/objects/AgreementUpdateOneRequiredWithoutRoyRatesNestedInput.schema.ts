import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { AgreementCreateWithoutRoyRatesInputObjectSchema as AgreementCreateWithoutRoyRatesInputObjectSchema } from './AgreementCreateWithoutRoyRatesInput.schema';
import { AgreementUncheckedCreateWithoutRoyRatesInputObjectSchema as AgreementUncheckedCreateWithoutRoyRatesInputObjectSchema } from './AgreementUncheckedCreateWithoutRoyRatesInput.schema';
import { AgreementCreateOrConnectWithoutRoyRatesInputObjectSchema as AgreementCreateOrConnectWithoutRoyRatesInputObjectSchema } from './AgreementCreateOrConnectWithoutRoyRatesInput.schema';
import { AgreementUpsertWithoutRoyRatesInputObjectSchema as AgreementUpsertWithoutRoyRatesInputObjectSchema } from './AgreementUpsertWithoutRoyRatesInput.schema';
import { AgreementWhereUniqueInputObjectSchema as AgreementWhereUniqueInputObjectSchema } from './AgreementWhereUniqueInput.schema';
import { AgreementUpdateToOneWithWhereWithoutRoyRatesInputObjectSchema as AgreementUpdateToOneWithWhereWithoutRoyRatesInputObjectSchema } from './AgreementUpdateToOneWithWhereWithoutRoyRatesInput.schema';
import { AgreementUpdateWithoutRoyRatesInputObjectSchema as AgreementUpdateWithoutRoyRatesInputObjectSchema } from './AgreementUpdateWithoutRoyRatesInput.schema';
import { AgreementUncheckedUpdateWithoutRoyRatesInputObjectSchema as AgreementUncheckedUpdateWithoutRoyRatesInputObjectSchema } from './AgreementUncheckedUpdateWithoutRoyRatesInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => AgreementCreateWithoutRoyRatesInputObjectSchema), z.lazy(() => AgreementUncheckedCreateWithoutRoyRatesInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => AgreementCreateOrConnectWithoutRoyRatesInputObjectSchema).optional(),
  upsert: z.lazy(() => AgreementUpsertWithoutRoyRatesInputObjectSchema).optional(),
  connect: z.lazy(() => AgreementWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => AgreementUpdateToOneWithWhereWithoutRoyRatesInputObjectSchema), z.lazy(() => AgreementUpdateWithoutRoyRatesInputObjectSchema), z.lazy(() => AgreementUncheckedUpdateWithoutRoyRatesInputObjectSchema)]).optional()
}).strict();
export const AgreementUpdateOneRequiredWithoutRoyRatesNestedInputObjectSchema: z.ZodType<Prisma.AgreementUpdateOneRequiredWithoutRoyRatesNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.AgreementUpdateOneRequiredWithoutRoyRatesNestedInput>;
export const AgreementUpdateOneRequiredWithoutRoyRatesNestedInputObjectZodSchema = makeSchema();
