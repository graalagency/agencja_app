import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { AgreementRightCreateWithoutRoyRatesInputObjectSchema as AgreementRightCreateWithoutRoyRatesInputObjectSchema } from './AgreementRightCreateWithoutRoyRatesInput.schema';
import { AgreementRightUncheckedCreateWithoutRoyRatesInputObjectSchema as AgreementRightUncheckedCreateWithoutRoyRatesInputObjectSchema } from './AgreementRightUncheckedCreateWithoutRoyRatesInput.schema';
import { AgreementRightCreateOrConnectWithoutRoyRatesInputObjectSchema as AgreementRightCreateOrConnectWithoutRoyRatesInputObjectSchema } from './AgreementRightCreateOrConnectWithoutRoyRatesInput.schema';
import { AgreementRightWhereUniqueInputObjectSchema as AgreementRightWhereUniqueInputObjectSchema } from './AgreementRightWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => AgreementRightCreateWithoutRoyRatesInputObjectSchema), z.lazy(() => AgreementRightUncheckedCreateWithoutRoyRatesInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => AgreementRightCreateOrConnectWithoutRoyRatesInputObjectSchema).optional(),
  connect: z.lazy(() => AgreementRightWhereUniqueInputObjectSchema).optional()
}).strict();
export const AgreementRightCreateNestedOneWithoutRoyRatesInputObjectSchema: z.ZodType<Prisma.AgreementRightCreateNestedOneWithoutRoyRatesInput> = makeSchema() as unknown as z.ZodType<Prisma.AgreementRightCreateNestedOneWithoutRoyRatesInput>;
export const AgreementRightCreateNestedOneWithoutRoyRatesInputObjectZodSchema = makeSchema();
