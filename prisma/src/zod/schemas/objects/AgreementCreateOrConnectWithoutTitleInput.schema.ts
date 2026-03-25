import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { AgreementWhereUniqueInputObjectSchema as AgreementWhereUniqueInputObjectSchema } from './AgreementWhereUniqueInput.schema';
import { AgreementCreateWithoutTitleInputObjectSchema as AgreementCreateWithoutTitleInputObjectSchema } from './AgreementCreateWithoutTitleInput.schema';
import { AgreementUncheckedCreateWithoutTitleInputObjectSchema as AgreementUncheckedCreateWithoutTitleInputObjectSchema } from './AgreementUncheckedCreateWithoutTitleInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => AgreementWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => AgreementCreateWithoutTitleInputObjectSchema), z.lazy(() => AgreementUncheckedCreateWithoutTitleInputObjectSchema)])
}).strict();
export const AgreementCreateOrConnectWithoutTitleInputObjectSchema: z.ZodType<Prisma.AgreementCreateOrConnectWithoutTitleInput> = makeSchema() as unknown as z.ZodType<Prisma.AgreementCreateOrConnectWithoutTitleInput>;
export const AgreementCreateOrConnectWithoutTitleInputObjectZodSchema = makeSchema();
