import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { AgreementCreateWithoutRightsInputObjectSchema as AgreementCreateWithoutRightsInputObjectSchema } from './AgreementCreateWithoutRightsInput.schema';
import { AgreementUncheckedCreateWithoutRightsInputObjectSchema as AgreementUncheckedCreateWithoutRightsInputObjectSchema } from './AgreementUncheckedCreateWithoutRightsInput.schema';
import { AgreementCreateOrConnectWithoutRightsInputObjectSchema as AgreementCreateOrConnectWithoutRightsInputObjectSchema } from './AgreementCreateOrConnectWithoutRightsInput.schema';
import { AgreementWhereUniqueInputObjectSchema as AgreementWhereUniqueInputObjectSchema } from './AgreementWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => AgreementCreateWithoutRightsInputObjectSchema), z.lazy(() => AgreementUncheckedCreateWithoutRightsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => AgreementCreateOrConnectWithoutRightsInputObjectSchema).optional(),
  connect: z.lazy(() => AgreementWhereUniqueInputObjectSchema).optional()
}).strict();
export const AgreementCreateNestedOneWithoutRightsInputObjectSchema: z.ZodType<Prisma.AgreementCreateNestedOneWithoutRightsInput> = makeSchema() as unknown as z.ZodType<Prisma.AgreementCreateNestedOneWithoutRightsInput>;
export const AgreementCreateNestedOneWithoutRightsInputObjectZodSchema = makeSchema();
