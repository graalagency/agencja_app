import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { AgreementWhereUniqueInputObjectSchema as AgreementWhereUniqueInputObjectSchema } from './AgreementWhereUniqueInput.schema';
import { AgreementCreateWithoutRightsInputObjectSchema as AgreementCreateWithoutRightsInputObjectSchema } from './AgreementCreateWithoutRightsInput.schema';
import { AgreementUncheckedCreateWithoutRightsInputObjectSchema as AgreementUncheckedCreateWithoutRightsInputObjectSchema } from './AgreementUncheckedCreateWithoutRightsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => AgreementWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => AgreementCreateWithoutRightsInputObjectSchema), z.lazy(() => AgreementUncheckedCreateWithoutRightsInputObjectSchema)])
}).strict();
export const AgreementCreateOrConnectWithoutRightsInputObjectSchema: z.ZodType<Prisma.AgreementCreateOrConnectWithoutRightsInput> = makeSchema() as unknown as z.ZodType<Prisma.AgreementCreateOrConnectWithoutRightsInput>;
export const AgreementCreateOrConnectWithoutRightsInputObjectZodSchema = makeSchema();
