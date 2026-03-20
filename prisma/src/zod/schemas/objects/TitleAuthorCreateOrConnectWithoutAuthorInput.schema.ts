import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TitleAuthorWhereUniqueInputObjectSchema as TitleAuthorWhereUniqueInputObjectSchema } from './TitleAuthorWhereUniqueInput.schema';
import { TitleAuthorCreateWithoutAuthorInputObjectSchema as TitleAuthorCreateWithoutAuthorInputObjectSchema } from './TitleAuthorCreateWithoutAuthorInput.schema';
import { TitleAuthorUncheckedCreateWithoutAuthorInputObjectSchema as TitleAuthorUncheckedCreateWithoutAuthorInputObjectSchema } from './TitleAuthorUncheckedCreateWithoutAuthorInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TitleAuthorWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => TitleAuthorCreateWithoutAuthorInputObjectSchema), z.lazy(() => TitleAuthorUncheckedCreateWithoutAuthorInputObjectSchema)])
}).strict();
export const TitleAuthorCreateOrConnectWithoutAuthorInputObjectSchema: z.ZodType<Prisma.TitleAuthorCreateOrConnectWithoutAuthorInput> = makeSchema() as unknown as z.ZodType<Prisma.TitleAuthorCreateOrConnectWithoutAuthorInput>;
export const TitleAuthorCreateOrConnectWithoutAuthorInputObjectZodSchema = makeSchema();
