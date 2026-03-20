import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TitleCreateWithoutTitleAuthorsInputObjectSchema as TitleCreateWithoutTitleAuthorsInputObjectSchema } from './TitleCreateWithoutTitleAuthorsInput.schema';
import { TitleUncheckedCreateWithoutTitleAuthorsInputObjectSchema as TitleUncheckedCreateWithoutTitleAuthorsInputObjectSchema } from './TitleUncheckedCreateWithoutTitleAuthorsInput.schema';
import { TitleCreateOrConnectWithoutTitleAuthorsInputObjectSchema as TitleCreateOrConnectWithoutTitleAuthorsInputObjectSchema } from './TitleCreateOrConnectWithoutTitleAuthorsInput.schema';
import { TitleWhereUniqueInputObjectSchema as TitleWhereUniqueInputObjectSchema } from './TitleWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => TitleCreateWithoutTitleAuthorsInputObjectSchema), z.lazy(() => TitleUncheckedCreateWithoutTitleAuthorsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => TitleCreateOrConnectWithoutTitleAuthorsInputObjectSchema).optional(),
  connect: z.lazy(() => TitleWhereUniqueInputObjectSchema).optional()
}).strict();
export const TitleCreateNestedOneWithoutTitleAuthorsInputObjectSchema: z.ZodType<Prisma.TitleCreateNestedOneWithoutTitleAuthorsInput> = makeSchema() as unknown as z.ZodType<Prisma.TitleCreateNestedOneWithoutTitleAuthorsInput>;
export const TitleCreateNestedOneWithoutTitleAuthorsInputObjectZodSchema = makeSchema();
