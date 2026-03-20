import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TitleWhereUniqueInputObjectSchema as TitleWhereUniqueInputObjectSchema } from './TitleWhereUniqueInput.schema';
import { TitleUpdateWithoutPublisherInputObjectSchema as TitleUpdateWithoutPublisherInputObjectSchema } from './TitleUpdateWithoutPublisherInput.schema';
import { TitleUncheckedUpdateWithoutPublisherInputObjectSchema as TitleUncheckedUpdateWithoutPublisherInputObjectSchema } from './TitleUncheckedUpdateWithoutPublisherInput.schema';
import { TitleCreateWithoutPublisherInputObjectSchema as TitleCreateWithoutPublisherInputObjectSchema } from './TitleCreateWithoutPublisherInput.schema';
import { TitleUncheckedCreateWithoutPublisherInputObjectSchema as TitleUncheckedCreateWithoutPublisherInputObjectSchema } from './TitleUncheckedCreateWithoutPublisherInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TitleWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => TitleUpdateWithoutPublisherInputObjectSchema), z.lazy(() => TitleUncheckedUpdateWithoutPublisherInputObjectSchema)]),
  create: z.union([z.lazy(() => TitleCreateWithoutPublisherInputObjectSchema), z.lazy(() => TitleUncheckedCreateWithoutPublisherInputObjectSchema)])
}).strict();
export const TitleUpsertWithWhereUniqueWithoutPublisherInputObjectSchema: z.ZodType<Prisma.TitleUpsertWithWhereUniqueWithoutPublisherInput> = makeSchema() as unknown as z.ZodType<Prisma.TitleUpsertWithWhereUniqueWithoutPublisherInput>;
export const TitleUpsertWithWhereUniqueWithoutPublisherInputObjectZodSchema = makeSchema();
