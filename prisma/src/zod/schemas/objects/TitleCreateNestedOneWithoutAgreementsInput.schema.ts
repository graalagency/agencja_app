import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TitleCreateWithoutAgreementsInputObjectSchema as TitleCreateWithoutAgreementsInputObjectSchema } from './TitleCreateWithoutAgreementsInput.schema';
import { TitleUncheckedCreateWithoutAgreementsInputObjectSchema as TitleUncheckedCreateWithoutAgreementsInputObjectSchema } from './TitleUncheckedCreateWithoutAgreementsInput.schema';
import { TitleCreateOrConnectWithoutAgreementsInputObjectSchema as TitleCreateOrConnectWithoutAgreementsInputObjectSchema } from './TitleCreateOrConnectWithoutAgreementsInput.schema';
import { TitleWhereUniqueInputObjectSchema as TitleWhereUniqueInputObjectSchema } from './TitleWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => TitleCreateWithoutAgreementsInputObjectSchema), z.lazy(() => TitleUncheckedCreateWithoutAgreementsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => TitleCreateOrConnectWithoutAgreementsInputObjectSchema).optional(),
  connect: z.lazy(() => TitleWhereUniqueInputObjectSchema).optional()
}).strict();
export const TitleCreateNestedOneWithoutAgreementsInputObjectSchema: z.ZodType<Prisma.TitleCreateNestedOneWithoutAgreementsInput> = makeSchema() as unknown as z.ZodType<Prisma.TitleCreateNestedOneWithoutAgreementsInput>;
export const TitleCreateNestedOneWithoutAgreementsInputObjectZodSchema = makeSchema();
