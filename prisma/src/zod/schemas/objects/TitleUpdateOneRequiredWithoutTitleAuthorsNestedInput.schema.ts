import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TitleCreateWithoutTitleAuthorsInputObjectSchema as TitleCreateWithoutTitleAuthorsInputObjectSchema } from './TitleCreateWithoutTitleAuthorsInput.schema';
import { TitleUncheckedCreateWithoutTitleAuthorsInputObjectSchema as TitleUncheckedCreateWithoutTitleAuthorsInputObjectSchema } from './TitleUncheckedCreateWithoutTitleAuthorsInput.schema';
import { TitleCreateOrConnectWithoutTitleAuthorsInputObjectSchema as TitleCreateOrConnectWithoutTitleAuthorsInputObjectSchema } from './TitleCreateOrConnectWithoutTitleAuthorsInput.schema';
import { TitleUpsertWithoutTitleAuthorsInputObjectSchema as TitleUpsertWithoutTitleAuthorsInputObjectSchema } from './TitleUpsertWithoutTitleAuthorsInput.schema';
import { TitleWhereUniqueInputObjectSchema as TitleWhereUniqueInputObjectSchema } from './TitleWhereUniqueInput.schema';
import { TitleUpdateToOneWithWhereWithoutTitleAuthorsInputObjectSchema as TitleUpdateToOneWithWhereWithoutTitleAuthorsInputObjectSchema } from './TitleUpdateToOneWithWhereWithoutTitleAuthorsInput.schema';
import { TitleUpdateWithoutTitleAuthorsInputObjectSchema as TitleUpdateWithoutTitleAuthorsInputObjectSchema } from './TitleUpdateWithoutTitleAuthorsInput.schema';
import { TitleUncheckedUpdateWithoutTitleAuthorsInputObjectSchema as TitleUncheckedUpdateWithoutTitleAuthorsInputObjectSchema } from './TitleUncheckedUpdateWithoutTitleAuthorsInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => TitleCreateWithoutTitleAuthorsInputObjectSchema), z.lazy(() => TitleUncheckedCreateWithoutTitleAuthorsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => TitleCreateOrConnectWithoutTitleAuthorsInputObjectSchema).optional(),
  upsert: z.lazy(() => TitleUpsertWithoutTitleAuthorsInputObjectSchema).optional(),
  connect: z.lazy(() => TitleWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => TitleUpdateToOneWithWhereWithoutTitleAuthorsInputObjectSchema), z.lazy(() => TitleUpdateWithoutTitleAuthorsInputObjectSchema), z.lazy(() => TitleUncheckedUpdateWithoutTitleAuthorsInputObjectSchema)]).optional()
}).strict();
export const TitleUpdateOneRequiredWithoutTitleAuthorsNestedInputObjectSchema: z.ZodType<Prisma.TitleUpdateOneRequiredWithoutTitleAuthorsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.TitleUpdateOneRequiredWithoutTitleAuthorsNestedInput>;
export const TitleUpdateOneRequiredWithoutTitleAuthorsNestedInputObjectZodSchema = makeSchema();
