import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { AgreementRightWhereUniqueInputObjectSchema as AgreementRightWhereUniqueInputObjectSchema } from './AgreementRightWhereUniqueInput.schema';
import { AgreementRightCreateWithoutRoyRatesInputObjectSchema as AgreementRightCreateWithoutRoyRatesInputObjectSchema } from './AgreementRightCreateWithoutRoyRatesInput.schema';
import { AgreementRightUncheckedCreateWithoutRoyRatesInputObjectSchema as AgreementRightUncheckedCreateWithoutRoyRatesInputObjectSchema } from './AgreementRightUncheckedCreateWithoutRoyRatesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => AgreementRightWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => AgreementRightCreateWithoutRoyRatesInputObjectSchema), z.lazy(() => AgreementRightUncheckedCreateWithoutRoyRatesInputObjectSchema)])
}).strict();
export const AgreementRightCreateOrConnectWithoutRoyRatesInputObjectSchema: z.ZodType<Prisma.AgreementRightCreateOrConnectWithoutRoyRatesInput> = makeSchema() as unknown as z.ZodType<Prisma.AgreementRightCreateOrConnectWithoutRoyRatesInput>;
export const AgreementRightCreateOrConnectWithoutRoyRatesInputObjectZodSchema = makeSchema();
