import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { AgreementWhereUniqueInputObjectSchema as AgreementWhereUniqueInputObjectSchema } from './AgreementWhereUniqueInput.schema';
import { AgreementCreateWithoutClientInputObjectSchema as AgreementCreateWithoutClientInputObjectSchema } from './AgreementCreateWithoutClientInput.schema';
import { AgreementUncheckedCreateWithoutClientInputObjectSchema as AgreementUncheckedCreateWithoutClientInputObjectSchema } from './AgreementUncheckedCreateWithoutClientInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => AgreementWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => AgreementCreateWithoutClientInputObjectSchema), z.lazy(() => AgreementUncheckedCreateWithoutClientInputObjectSchema)])
}).strict();
export const AgreementCreateOrConnectWithoutClientInputObjectSchema: z.ZodType<Prisma.AgreementCreateOrConnectWithoutClientInput> = makeSchema() as unknown as z.ZodType<Prisma.AgreementCreateOrConnectWithoutClientInput>;
export const AgreementCreateOrConnectWithoutClientInputObjectZodSchema = makeSchema();
