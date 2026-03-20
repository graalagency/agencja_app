import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TitleWhereUniqueInputObjectSchema as TitleWhereUniqueInputObjectSchema } from './TitleWhereUniqueInput.schema';
import { TitleUpdateWithoutPublisherInputObjectSchema as TitleUpdateWithoutPublisherInputObjectSchema } from './TitleUpdateWithoutPublisherInput.schema';
import { TitleUncheckedUpdateWithoutPublisherInputObjectSchema as TitleUncheckedUpdateWithoutPublisherInputObjectSchema } from './TitleUncheckedUpdateWithoutPublisherInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TitleWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => TitleUpdateWithoutPublisherInputObjectSchema), z.lazy(() => TitleUncheckedUpdateWithoutPublisherInputObjectSchema)])
}).strict();
export const TitleUpdateWithWhereUniqueWithoutPublisherInputObjectSchema: z.ZodType<Prisma.TitleUpdateWithWhereUniqueWithoutPublisherInput> = makeSchema() as unknown as z.ZodType<Prisma.TitleUpdateWithWhereUniqueWithoutPublisherInput>;
export const TitleUpdateWithWhereUniqueWithoutPublisherInputObjectZodSchema = makeSchema();
