import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TitleAuthorCreateWithoutTitleInputObjectSchema as TitleAuthorCreateWithoutTitleInputObjectSchema } from './TitleAuthorCreateWithoutTitleInput.schema';
import { TitleAuthorUncheckedCreateWithoutTitleInputObjectSchema as TitleAuthorUncheckedCreateWithoutTitleInputObjectSchema } from './TitleAuthorUncheckedCreateWithoutTitleInput.schema';
import { TitleAuthorCreateOrConnectWithoutTitleInputObjectSchema as TitleAuthorCreateOrConnectWithoutTitleInputObjectSchema } from './TitleAuthorCreateOrConnectWithoutTitleInput.schema';
import { TitleAuthorCreateManyTitleInputEnvelopeObjectSchema as TitleAuthorCreateManyTitleInputEnvelopeObjectSchema } from './TitleAuthorCreateManyTitleInputEnvelope.schema';
import { TitleAuthorWhereUniqueInputObjectSchema as TitleAuthorWhereUniqueInputObjectSchema } from './TitleAuthorWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => TitleAuthorCreateWithoutTitleInputObjectSchema), z.lazy(() => TitleAuthorCreateWithoutTitleInputObjectSchema).array(), z.lazy(() => TitleAuthorUncheckedCreateWithoutTitleInputObjectSchema), z.lazy(() => TitleAuthorUncheckedCreateWithoutTitleInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => TitleAuthorCreateOrConnectWithoutTitleInputObjectSchema), z.lazy(() => TitleAuthorCreateOrConnectWithoutTitleInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => TitleAuthorCreateManyTitleInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => TitleAuthorWhereUniqueInputObjectSchema), z.lazy(() => TitleAuthorWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const TitleAuthorCreateNestedManyWithoutTitleInputObjectSchema: z.ZodType<Prisma.TitleAuthorCreateNestedManyWithoutTitleInput> = makeSchema() as unknown as z.ZodType<Prisma.TitleAuthorCreateNestedManyWithoutTitleInput>;
export const TitleAuthorCreateNestedManyWithoutTitleInputObjectZodSchema = makeSchema();
