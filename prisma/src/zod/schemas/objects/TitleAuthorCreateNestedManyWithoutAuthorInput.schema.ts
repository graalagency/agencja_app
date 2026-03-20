import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TitleAuthorCreateWithoutAuthorInputObjectSchema as TitleAuthorCreateWithoutAuthorInputObjectSchema } from './TitleAuthorCreateWithoutAuthorInput.schema';
import { TitleAuthorUncheckedCreateWithoutAuthorInputObjectSchema as TitleAuthorUncheckedCreateWithoutAuthorInputObjectSchema } from './TitleAuthorUncheckedCreateWithoutAuthorInput.schema';
import { TitleAuthorCreateOrConnectWithoutAuthorInputObjectSchema as TitleAuthorCreateOrConnectWithoutAuthorInputObjectSchema } from './TitleAuthorCreateOrConnectWithoutAuthorInput.schema';
import { TitleAuthorCreateManyAuthorInputEnvelopeObjectSchema as TitleAuthorCreateManyAuthorInputEnvelopeObjectSchema } from './TitleAuthorCreateManyAuthorInputEnvelope.schema';
import { TitleAuthorWhereUniqueInputObjectSchema as TitleAuthorWhereUniqueInputObjectSchema } from './TitleAuthorWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => TitleAuthorCreateWithoutAuthorInputObjectSchema), z.lazy(() => TitleAuthorCreateWithoutAuthorInputObjectSchema).array(), z.lazy(() => TitleAuthorUncheckedCreateWithoutAuthorInputObjectSchema), z.lazy(() => TitleAuthorUncheckedCreateWithoutAuthorInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => TitleAuthorCreateOrConnectWithoutAuthorInputObjectSchema), z.lazy(() => TitleAuthorCreateOrConnectWithoutAuthorInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => TitleAuthorCreateManyAuthorInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => TitleAuthorWhereUniqueInputObjectSchema), z.lazy(() => TitleAuthorWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const TitleAuthorCreateNestedManyWithoutAuthorInputObjectSchema: z.ZodType<Prisma.TitleAuthorCreateNestedManyWithoutAuthorInput> = makeSchema() as unknown as z.ZodType<Prisma.TitleAuthorCreateNestedManyWithoutAuthorInput>;
export const TitleAuthorCreateNestedManyWithoutAuthorInputObjectZodSchema = makeSchema();
