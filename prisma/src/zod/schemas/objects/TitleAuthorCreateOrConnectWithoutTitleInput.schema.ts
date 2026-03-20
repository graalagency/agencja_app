import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TitleAuthorWhereUniqueInputObjectSchema as TitleAuthorWhereUniqueInputObjectSchema } from './TitleAuthorWhereUniqueInput.schema';
import { TitleAuthorCreateWithoutTitleInputObjectSchema as TitleAuthorCreateWithoutTitleInputObjectSchema } from './TitleAuthorCreateWithoutTitleInput.schema';
import { TitleAuthorUncheckedCreateWithoutTitleInputObjectSchema as TitleAuthorUncheckedCreateWithoutTitleInputObjectSchema } from './TitleAuthorUncheckedCreateWithoutTitleInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TitleAuthorWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => TitleAuthorCreateWithoutTitleInputObjectSchema), z.lazy(() => TitleAuthorUncheckedCreateWithoutTitleInputObjectSchema)])
}).strict();
export const TitleAuthorCreateOrConnectWithoutTitleInputObjectSchema: z.ZodType<Prisma.TitleAuthorCreateOrConnectWithoutTitleInput> = makeSchema() as unknown as z.ZodType<Prisma.TitleAuthorCreateOrConnectWithoutTitleInput>;
export const TitleAuthorCreateOrConnectWithoutTitleInputObjectZodSchema = makeSchema();
