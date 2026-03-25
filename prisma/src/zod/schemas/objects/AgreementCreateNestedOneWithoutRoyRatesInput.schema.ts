import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { AgreementCreateWithoutRoyRatesInputObjectSchema as AgreementCreateWithoutRoyRatesInputObjectSchema } from './AgreementCreateWithoutRoyRatesInput.schema';
import { AgreementUncheckedCreateWithoutRoyRatesInputObjectSchema as AgreementUncheckedCreateWithoutRoyRatesInputObjectSchema } from './AgreementUncheckedCreateWithoutRoyRatesInput.schema';
import { AgreementCreateOrConnectWithoutRoyRatesInputObjectSchema as AgreementCreateOrConnectWithoutRoyRatesInputObjectSchema } from './AgreementCreateOrConnectWithoutRoyRatesInput.schema';
import { AgreementWhereUniqueInputObjectSchema as AgreementWhereUniqueInputObjectSchema } from './AgreementWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => AgreementCreateWithoutRoyRatesInputObjectSchema), z.lazy(() => AgreementUncheckedCreateWithoutRoyRatesInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => AgreementCreateOrConnectWithoutRoyRatesInputObjectSchema).optional(),
  connect: z.lazy(() => AgreementWhereUniqueInputObjectSchema).optional()
}).strict();
export const AgreementCreateNestedOneWithoutRoyRatesInputObjectSchema: z.ZodType<Prisma.AgreementCreateNestedOneWithoutRoyRatesInput> = makeSchema() as unknown as z.ZodType<Prisma.AgreementCreateNestedOneWithoutRoyRatesInput>;
export const AgreementCreateNestedOneWithoutRoyRatesInputObjectZodSchema = makeSchema();
