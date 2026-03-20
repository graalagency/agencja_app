import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TitleCreateWithoutClientInputObjectSchema as TitleCreateWithoutClientInputObjectSchema } from './TitleCreateWithoutClientInput.schema';
import { TitleUncheckedCreateWithoutClientInputObjectSchema as TitleUncheckedCreateWithoutClientInputObjectSchema } from './TitleUncheckedCreateWithoutClientInput.schema';
import { TitleCreateOrConnectWithoutClientInputObjectSchema as TitleCreateOrConnectWithoutClientInputObjectSchema } from './TitleCreateOrConnectWithoutClientInput.schema';
import { TitleCreateManyClientInputEnvelopeObjectSchema as TitleCreateManyClientInputEnvelopeObjectSchema } from './TitleCreateManyClientInputEnvelope.schema';
import { TitleWhereUniqueInputObjectSchema as TitleWhereUniqueInputObjectSchema } from './TitleWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => TitleCreateWithoutClientInputObjectSchema), z.lazy(() => TitleCreateWithoutClientInputObjectSchema).array(), z.lazy(() => TitleUncheckedCreateWithoutClientInputObjectSchema), z.lazy(() => TitleUncheckedCreateWithoutClientInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => TitleCreateOrConnectWithoutClientInputObjectSchema), z.lazy(() => TitleCreateOrConnectWithoutClientInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => TitleCreateManyClientInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => TitleWhereUniqueInputObjectSchema), z.lazy(() => TitleWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const TitleUncheckedCreateNestedManyWithoutClientInputObjectSchema: z.ZodType<Prisma.TitleUncheckedCreateNestedManyWithoutClientInput> = makeSchema() as unknown as z.ZodType<Prisma.TitleUncheckedCreateNestedManyWithoutClientInput>;
export const TitleUncheckedCreateNestedManyWithoutClientInputObjectZodSchema = makeSchema();
