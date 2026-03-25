import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TitleCreateWithoutSubmissionsInputObjectSchema as TitleCreateWithoutSubmissionsInputObjectSchema } from './TitleCreateWithoutSubmissionsInput.schema';
import { TitleUncheckedCreateWithoutSubmissionsInputObjectSchema as TitleUncheckedCreateWithoutSubmissionsInputObjectSchema } from './TitleUncheckedCreateWithoutSubmissionsInput.schema';
import { TitleCreateOrConnectWithoutSubmissionsInputObjectSchema as TitleCreateOrConnectWithoutSubmissionsInputObjectSchema } from './TitleCreateOrConnectWithoutSubmissionsInput.schema';
import { TitleWhereUniqueInputObjectSchema as TitleWhereUniqueInputObjectSchema } from './TitleWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => TitleCreateWithoutSubmissionsInputObjectSchema), z.lazy(() => TitleUncheckedCreateWithoutSubmissionsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => TitleCreateOrConnectWithoutSubmissionsInputObjectSchema).optional(),
  connect: z.lazy(() => TitleWhereUniqueInputObjectSchema).optional()
}).strict();
export const TitleCreateNestedOneWithoutSubmissionsInputObjectSchema: z.ZodType<Prisma.TitleCreateNestedOneWithoutSubmissionsInput> = makeSchema() as unknown as z.ZodType<Prisma.TitleCreateNestedOneWithoutSubmissionsInput>;
export const TitleCreateNestedOneWithoutSubmissionsInputObjectZodSchema = makeSchema();
