import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { AgreementWhereUniqueInputObjectSchema as AgreementWhereUniqueInputObjectSchema } from './AgreementWhereUniqueInput.schema';
import { AgreementCreateWithoutAdvancesInputObjectSchema as AgreementCreateWithoutAdvancesInputObjectSchema } from './AgreementCreateWithoutAdvancesInput.schema';
import { AgreementUncheckedCreateWithoutAdvancesInputObjectSchema as AgreementUncheckedCreateWithoutAdvancesInputObjectSchema } from './AgreementUncheckedCreateWithoutAdvancesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => AgreementWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => AgreementCreateWithoutAdvancesInputObjectSchema), z.lazy(() => AgreementUncheckedCreateWithoutAdvancesInputObjectSchema)])
}).strict();
export const AgreementCreateOrConnectWithoutAdvancesInputObjectSchema: z.ZodType<Prisma.AgreementCreateOrConnectWithoutAdvancesInput> = makeSchema() as unknown as z.ZodType<Prisma.AgreementCreateOrConnectWithoutAdvancesInput>;
export const AgreementCreateOrConnectWithoutAdvancesInputObjectZodSchema = makeSchema();
