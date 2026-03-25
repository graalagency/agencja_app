import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { AgreementRightCreateWithoutRoyRatesInputObjectSchema as AgreementRightCreateWithoutRoyRatesInputObjectSchema } from './AgreementRightCreateWithoutRoyRatesInput.schema';
import { AgreementRightUncheckedCreateWithoutRoyRatesInputObjectSchema as AgreementRightUncheckedCreateWithoutRoyRatesInputObjectSchema } from './AgreementRightUncheckedCreateWithoutRoyRatesInput.schema';
import { AgreementRightCreateOrConnectWithoutRoyRatesInputObjectSchema as AgreementRightCreateOrConnectWithoutRoyRatesInputObjectSchema } from './AgreementRightCreateOrConnectWithoutRoyRatesInput.schema';
import { AgreementRightUpsertWithoutRoyRatesInputObjectSchema as AgreementRightUpsertWithoutRoyRatesInputObjectSchema } from './AgreementRightUpsertWithoutRoyRatesInput.schema';
import { AgreementRightWhereUniqueInputObjectSchema as AgreementRightWhereUniqueInputObjectSchema } from './AgreementRightWhereUniqueInput.schema';
import { AgreementRightUpdateToOneWithWhereWithoutRoyRatesInputObjectSchema as AgreementRightUpdateToOneWithWhereWithoutRoyRatesInputObjectSchema } from './AgreementRightUpdateToOneWithWhereWithoutRoyRatesInput.schema';
import { AgreementRightUpdateWithoutRoyRatesInputObjectSchema as AgreementRightUpdateWithoutRoyRatesInputObjectSchema } from './AgreementRightUpdateWithoutRoyRatesInput.schema';
import { AgreementRightUncheckedUpdateWithoutRoyRatesInputObjectSchema as AgreementRightUncheckedUpdateWithoutRoyRatesInputObjectSchema } from './AgreementRightUncheckedUpdateWithoutRoyRatesInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => AgreementRightCreateWithoutRoyRatesInputObjectSchema), z.lazy(() => AgreementRightUncheckedCreateWithoutRoyRatesInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => AgreementRightCreateOrConnectWithoutRoyRatesInputObjectSchema).optional(),
  upsert: z.lazy(() => AgreementRightUpsertWithoutRoyRatesInputObjectSchema).optional(),
  connect: z.lazy(() => AgreementRightWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => AgreementRightUpdateToOneWithWhereWithoutRoyRatesInputObjectSchema), z.lazy(() => AgreementRightUpdateWithoutRoyRatesInputObjectSchema), z.lazy(() => AgreementRightUncheckedUpdateWithoutRoyRatesInputObjectSchema)]).optional()
}).strict();
export const AgreementRightUpdateOneRequiredWithoutRoyRatesNestedInputObjectSchema: z.ZodType<Prisma.AgreementRightUpdateOneRequiredWithoutRoyRatesNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.AgreementRightUpdateOneRequiredWithoutRoyRatesNestedInput>;
export const AgreementRightUpdateOneRequiredWithoutRoyRatesNestedInputObjectZodSchema = makeSchema();
