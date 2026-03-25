import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { AgreementWhereUniqueInputObjectSchema as AgreementWhereUniqueInputObjectSchema } from './AgreementWhereUniqueInput.schema';
import { AgreementCreateWithoutRoyRatesInputObjectSchema as AgreementCreateWithoutRoyRatesInputObjectSchema } from './AgreementCreateWithoutRoyRatesInput.schema';
import { AgreementUncheckedCreateWithoutRoyRatesInputObjectSchema as AgreementUncheckedCreateWithoutRoyRatesInputObjectSchema } from './AgreementUncheckedCreateWithoutRoyRatesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => AgreementWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => AgreementCreateWithoutRoyRatesInputObjectSchema), z.lazy(() => AgreementUncheckedCreateWithoutRoyRatesInputObjectSchema)])
}).strict();
export const AgreementCreateOrConnectWithoutRoyRatesInputObjectSchema: z.ZodType<Prisma.AgreementCreateOrConnectWithoutRoyRatesInput> = makeSchema() as unknown as z.ZodType<Prisma.AgreementCreateOrConnectWithoutRoyRatesInput>;
export const AgreementCreateOrConnectWithoutRoyRatesInputObjectZodSchema = makeSchema();
