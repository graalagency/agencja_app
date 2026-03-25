import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TitleCreateWithoutSubmissionsInputObjectSchema as TitleCreateWithoutSubmissionsInputObjectSchema } from './TitleCreateWithoutSubmissionsInput.schema';
import { TitleUncheckedCreateWithoutSubmissionsInputObjectSchema as TitleUncheckedCreateWithoutSubmissionsInputObjectSchema } from './TitleUncheckedCreateWithoutSubmissionsInput.schema';
import { TitleCreateOrConnectWithoutSubmissionsInputObjectSchema as TitleCreateOrConnectWithoutSubmissionsInputObjectSchema } from './TitleCreateOrConnectWithoutSubmissionsInput.schema';
import { TitleUpsertWithoutSubmissionsInputObjectSchema as TitleUpsertWithoutSubmissionsInputObjectSchema } from './TitleUpsertWithoutSubmissionsInput.schema';
import { TitleWhereInputObjectSchema as TitleWhereInputObjectSchema } from './TitleWhereInput.schema';
import { TitleWhereUniqueInputObjectSchema as TitleWhereUniqueInputObjectSchema } from './TitleWhereUniqueInput.schema';
import { TitleUpdateToOneWithWhereWithoutSubmissionsInputObjectSchema as TitleUpdateToOneWithWhereWithoutSubmissionsInputObjectSchema } from './TitleUpdateToOneWithWhereWithoutSubmissionsInput.schema';
import { TitleUpdateWithoutSubmissionsInputObjectSchema as TitleUpdateWithoutSubmissionsInputObjectSchema } from './TitleUpdateWithoutSubmissionsInput.schema';
import { TitleUncheckedUpdateWithoutSubmissionsInputObjectSchema as TitleUncheckedUpdateWithoutSubmissionsInputObjectSchema } from './TitleUncheckedUpdateWithoutSubmissionsInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => TitleCreateWithoutSubmissionsInputObjectSchema), z.lazy(() => TitleUncheckedCreateWithoutSubmissionsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => TitleCreateOrConnectWithoutSubmissionsInputObjectSchema).optional(),
  upsert: z.lazy(() => TitleUpsertWithoutSubmissionsInputObjectSchema).optional(),
  disconnect: z.union([z.boolean(), z.lazy(() => TitleWhereInputObjectSchema)]).optional(),
  delete: z.union([z.boolean(), z.lazy(() => TitleWhereInputObjectSchema)]).optional(),
  connect: z.lazy(() => TitleWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => TitleUpdateToOneWithWhereWithoutSubmissionsInputObjectSchema), z.lazy(() => TitleUpdateWithoutSubmissionsInputObjectSchema), z.lazy(() => TitleUncheckedUpdateWithoutSubmissionsInputObjectSchema)]).optional()
}).strict();
export const TitleUpdateOneWithoutSubmissionsNestedInputObjectSchema: z.ZodType<Prisma.TitleUpdateOneWithoutSubmissionsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.TitleUpdateOneWithoutSubmissionsNestedInput>;
export const TitleUpdateOneWithoutSubmissionsNestedInputObjectZodSchema = makeSchema();
