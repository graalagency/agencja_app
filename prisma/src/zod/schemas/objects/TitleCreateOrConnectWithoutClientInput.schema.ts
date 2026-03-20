import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TitleWhereUniqueInputObjectSchema as TitleWhereUniqueInputObjectSchema } from './TitleWhereUniqueInput.schema';
import { TitleCreateWithoutClientInputObjectSchema as TitleCreateWithoutClientInputObjectSchema } from './TitleCreateWithoutClientInput.schema';
import { TitleUncheckedCreateWithoutClientInputObjectSchema as TitleUncheckedCreateWithoutClientInputObjectSchema } from './TitleUncheckedCreateWithoutClientInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TitleWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => TitleCreateWithoutClientInputObjectSchema), z.lazy(() => TitleUncheckedCreateWithoutClientInputObjectSchema)])
}).strict();
export const TitleCreateOrConnectWithoutClientInputObjectSchema: z.ZodType<Prisma.TitleCreateOrConnectWithoutClientInput> = makeSchema() as unknown as z.ZodType<Prisma.TitleCreateOrConnectWithoutClientInput>;
export const TitleCreateOrConnectWithoutClientInputObjectZodSchema = makeSchema();
