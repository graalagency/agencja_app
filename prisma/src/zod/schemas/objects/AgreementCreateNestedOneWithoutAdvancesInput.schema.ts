import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { AgreementCreateWithoutAdvancesInputObjectSchema as AgreementCreateWithoutAdvancesInputObjectSchema } from './AgreementCreateWithoutAdvancesInput.schema';
import { AgreementUncheckedCreateWithoutAdvancesInputObjectSchema as AgreementUncheckedCreateWithoutAdvancesInputObjectSchema } from './AgreementUncheckedCreateWithoutAdvancesInput.schema';
import { AgreementCreateOrConnectWithoutAdvancesInputObjectSchema as AgreementCreateOrConnectWithoutAdvancesInputObjectSchema } from './AgreementCreateOrConnectWithoutAdvancesInput.schema';
import { AgreementWhereUniqueInputObjectSchema as AgreementWhereUniqueInputObjectSchema } from './AgreementWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => AgreementCreateWithoutAdvancesInputObjectSchema), z.lazy(() => AgreementUncheckedCreateWithoutAdvancesInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => AgreementCreateOrConnectWithoutAdvancesInputObjectSchema).optional(),
  connect: z.lazy(() => AgreementWhereUniqueInputObjectSchema).optional()
}).strict();
export const AgreementCreateNestedOneWithoutAdvancesInputObjectSchema: z.ZodType<Prisma.AgreementCreateNestedOneWithoutAdvancesInput> = makeSchema() as unknown as z.ZodType<Prisma.AgreementCreateNestedOneWithoutAdvancesInput>;
export const AgreementCreateNestedOneWithoutAdvancesInputObjectZodSchema = makeSchema();
