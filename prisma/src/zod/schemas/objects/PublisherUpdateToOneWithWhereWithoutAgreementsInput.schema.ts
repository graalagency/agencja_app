import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { PublisherWhereInputObjectSchema as PublisherWhereInputObjectSchema } from './PublisherWhereInput.schema';
import { PublisherUpdateWithoutAgreementsInputObjectSchema as PublisherUpdateWithoutAgreementsInputObjectSchema } from './PublisherUpdateWithoutAgreementsInput.schema';
import { PublisherUncheckedUpdateWithoutAgreementsInputObjectSchema as PublisherUncheckedUpdateWithoutAgreementsInputObjectSchema } from './PublisherUncheckedUpdateWithoutAgreementsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => PublisherWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => PublisherUpdateWithoutAgreementsInputObjectSchema), z.lazy(() => PublisherUncheckedUpdateWithoutAgreementsInputObjectSchema)])
}).strict();
export const PublisherUpdateToOneWithWhereWithoutAgreementsInputObjectSchema: z.ZodType<Prisma.PublisherUpdateToOneWithWhereWithoutAgreementsInput> = makeSchema() as unknown as z.ZodType<Prisma.PublisherUpdateToOneWithWhereWithoutAgreementsInput>;
export const PublisherUpdateToOneWithWhereWithoutAgreementsInputObjectZodSchema = makeSchema();
