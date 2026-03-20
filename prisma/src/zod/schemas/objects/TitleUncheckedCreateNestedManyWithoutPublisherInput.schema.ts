import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TitleCreateWithoutPublisherInputObjectSchema as TitleCreateWithoutPublisherInputObjectSchema } from './TitleCreateWithoutPublisherInput.schema';
import { TitleUncheckedCreateWithoutPublisherInputObjectSchema as TitleUncheckedCreateWithoutPublisherInputObjectSchema } from './TitleUncheckedCreateWithoutPublisherInput.schema';
import { TitleCreateOrConnectWithoutPublisherInputObjectSchema as TitleCreateOrConnectWithoutPublisherInputObjectSchema } from './TitleCreateOrConnectWithoutPublisherInput.schema';
import { TitleCreateManyPublisherInputEnvelopeObjectSchema as TitleCreateManyPublisherInputEnvelopeObjectSchema } from './TitleCreateManyPublisherInputEnvelope.schema';
import { TitleWhereUniqueInputObjectSchema as TitleWhereUniqueInputObjectSchema } from './TitleWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => TitleCreateWithoutPublisherInputObjectSchema), z.lazy(() => TitleCreateWithoutPublisherInputObjectSchema).array(), z.lazy(() => TitleUncheckedCreateWithoutPublisherInputObjectSchema), z.lazy(() => TitleUncheckedCreateWithoutPublisherInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => TitleCreateOrConnectWithoutPublisherInputObjectSchema), z.lazy(() => TitleCreateOrConnectWithoutPublisherInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => TitleCreateManyPublisherInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => TitleWhereUniqueInputObjectSchema), z.lazy(() => TitleWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const TitleUncheckedCreateNestedManyWithoutPublisherInputObjectSchema: z.ZodType<Prisma.TitleUncheckedCreateNestedManyWithoutPublisherInput> = makeSchema() as unknown as z.ZodType<Prisma.TitleUncheckedCreateNestedManyWithoutPublisherInput>;
export const TitleUncheckedCreateNestedManyWithoutPublisherInputObjectZodSchema = makeSchema();
