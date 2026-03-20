import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TitleWhereUniqueInputObjectSchema as TitleWhereUniqueInputObjectSchema } from './TitleWhereUniqueInput.schema';
import { TitleCreateWithoutTitleAuthorsInputObjectSchema as TitleCreateWithoutTitleAuthorsInputObjectSchema } from './TitleCreateWithoutTitleAuthorsInput.schema';
import { TitleUncheckedCreateWithoutTitleAuthorsInputObjectSchema as TitleUncheckedCreateWithoutTitleAuthorsInputObjectSchema } from './TitleUncheckedCreateWithoutTitleAuthorsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TitleWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => TitleCreateWithoutTitleAuthorsInputObjectSchema), z.lazy(() => TitleUncheckedCreateWithoutTitleAuthorsInputObjectSchema)])
}).strict();
export const TitleCreateOrConnectWithoutTitleAuthorsInputObjectSchema: z.ZodType<Prisma.TitleCreateOrConnectWithoutTitleAuthorsInput> = makeSchema() as unknown as z.ZodType<Prisma.TitleCreateOrConnectWithoutTitleAuthorsInput>;
export const TitleCreateOrConnectWithoutTitleAuthorsInputObjectZodSchema = makeSchema();
