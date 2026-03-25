import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TitleCreateWithoutAgreementsInputObjectSchema as TitleCreateWithoutAgreementsInputObjectSchema } from './TitleCreateWithoutAgreementsInput.schema';
import { TitleUncheckedCreateWithoutAgreementsInputObjectSchema as TitleUncheckedCreateWithoutAgreementsInputObjectSchema } from './TitleUncheckedCreateWithoutAgreementsInput.schema';
import { TitleCreateOrConnectWithoutAgreementsInputObjectSchema as TitleCreateOrConnectWithoutAgreementsInputObjectSchema } from './TitleCreateOrConnectWithoutAgreementsInput.schema';
import { TitleUpsertWithoutAgreementsInputObjectSchema as TitleUpsertWithoutAgreementsInputObjectSchema } from './TitleUpsertWithoutAgreementsInput.schema';
import { TitleWhereInputObjectSchema as TitleWhereInputObjectSchema } from './TitleWhereInput.schema';
import { TitleWhereUniqueInputObjectSchema as TitleWhereUniqueInputObjectSchema } from './TitleWhereUniqueInput.schema';
import { TitleUpdateToOneWithWhereWithoutAgreementsInputObjectSchema as TitleUpdateToOneWithWhereWithoutAgreementsInputObjectSchema } from './TitleUpdateToOneWithWhereWithoutAgreementsInput.schema';
import { TitleUpdateWithoutAgreementsInputObjectSchema as TitleUpdateWithoutAgreementsInputObjectSchema } from './TitleUpdateWithoutAgreementsInput.schema';
import { TitleUncheckedUpdateWithoutAgreementsInputObjectSchema as TitleUncheckedUpdateWithoutAgreementsInputObjectSchema } from './TitleUncheckedUpdateWithoutAgreementsInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => TitleCreateWithoutAgreementsInputObjectSchema), z.lazy(() => TitleUncheckedCreateWithoutAgreementsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => TitleCreateOrConnectWithoutAgreementsInputObjectSchema).optional(),
  upsert: z.lazy(() => TitleUpsertWithoutAgreementsInputObjectSchema).optional(),
  disconnect: z.union([z.boolean(), z.lazy(() => TitleWhereInputObjectSchema)]).optional(),
  delete: z.union([z.boolean(), z.lazy(() => TitleWhereInputObjectSchema)]).optional(),
  connect: z.lazy(() => TitleWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => TitleUpdateToOneWithWhereWithoutAgreementsInputObjectSchema), z.lazy(() => TitleUpdateWithoutAgreementsInputObjectSchema), z.lazy(() => TitleUncheckedUpdateWithoutAgreementsInputObjectSchema)]).optional()
}).strict();
export const TitleUpdateOneWithoutAgreementsNestedInputObjectSchema: z.ZodType<Prisma.TitleUpdateOneWithoutAgreementsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.TitleUpdateOneWithoutAgreementsNestedInput>;
export const TitleUpdateOneWithoutAgreementsNestedInputObjectZodSchema = makeSchema();
