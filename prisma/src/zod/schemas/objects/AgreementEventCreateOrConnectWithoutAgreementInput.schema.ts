import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { AgreementEventWhereUniqueInputObjectSchema as AgreementEventWhereUniqueInputObjectSchema } from './AgreementEventWhereUniqueInput.schema';
import { AgreementEventCreateWithoutAgreementInputObjectSchema as AgreementEventCreateWithoutAgreementInputObjectSchema } from './AgreementEventCreateWithoutAgreementInput.schema';
import { AgreementEventUncheckedCreateWithoutAgreementInputObjectSchema as AgreementEventUncheckedCreateWithoutAgreementInputObjectSchema } from './AgreementEventUncheckedCreateWithoutAgreementInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => AgreementEventWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => AgreementEventCreateWithoutAgreementInputObjectSchema), z.lazy(() => AgreementEventUncheckedCreateWithoutAgreementInputObjectSchema)])
}).strict();
export const AgreementEventCreateOrConnectWithoutAgreementInputObjectSchema: z.ZodType<Prisma.AgreementEventCreateOrConnectWithoutAgreementInput> = makeSchema() as unknown as z.ZodType<Prisma.AgreementEventCreateOrConnectWithoutAgreementInput>;
export const AgreementEventCreateOrConnectWithoutAgreementInputObjectZodSchema = makeSchema();
