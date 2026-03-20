import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TitleWhereUniqueInputObjectSchema as TitleWhereUniqueInputObjectSchema } from './TitleWhereUniqueInput.schema';
import { TitleCreateWithoutPublisherInputObjectSchema as TitleCreateWithoutPublisherInputObjectSchema } from './TitleCreateWithoutPublisherInput.schema';
import { TitleUncheckedCreateWithoutPublisherInputObjectSchema as TitleUncheckedCreateWithoutPublisherInputObjectSchema } from './TitleUncheckedCreateWithoutPublisherInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TitleWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => TitleCreateWithoutPublisherInputObjectSchema), z.lazy(() => TitleUncheckedCreateWithoutPublisherInputObjectSchema)])
}).strict();
export const TitleCreateOrConnectWithoutPublisherInputObjectSchema: z.ZodType<Prisma.TitleCreateOrConnectWithoutPublisherInput> = makeSchema() as unknown as z.ZodType<Prisma.TitleCreateOrConnectWithoutPublisherInput>;
export const TitleCreateOrConnectWithoutPublisherInputObjectZodSchema = makeSchema();
