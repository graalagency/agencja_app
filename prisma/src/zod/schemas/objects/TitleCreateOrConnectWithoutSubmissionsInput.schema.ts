import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TitleWhereUniqueInputObjectSchema as TitleWhereUniqueInputObjectSchema } from './TitleWhereUniqueInput.schema';
import { TitleCreateWithoutSubmissionsInputObjectSchema as TitleCreateWithoutSubmissionsInputObjectSchema } from './TitleCreateWithoutSubmissionsInput.schema';
import { TitleUncheckedCreateWithoutSubmissionsInputObjectSchema as TitleUncheckedCreateWithoutSubmissionsInputObjectSchema } from './TitleUncheckedCreateWithoutSubmissionsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TitleWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => TitleCreateWithoutSubmissionsInputObjectSchema), z.lazy(() => TitleUncheckedCreateWithoutSubmissionsInputObjectSchema)])
}).strict();
export const TitleCreateOrConnectWithoutSubmissionsInputObjectSchema: z.ZodType<Prisma.TitleCreateOrConnectWithoutSubmissionsInput> = makeSchema() as unknown as z.ZodType<Prisma.TitleCreateOrConnectWithoutSubmissionsInput>;
export const TitleCreateOrConnectWithoutSubmissionsInputObjectZodSchema = makeSchema();
