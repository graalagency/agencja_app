import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { PublisherUpdateWithoutAgreementsInputObjectSchema as PublisherUpdateWithoutAgreementsInputObjectSchema } from './PublisherUpdateWithoutAgreementsInput.schema';
import { PublisherUncheckedUpdateWithoutAgreementsInputObjectSchema as PublisherUncheckedUpdateWithoutAgreementsInputObjectSchema } from './PublisherUncheckedUpdateWithoutAgreementsInput.schema';
import { PublisherCreateWithoutAgreementsInputObjectSchema as PublisherCreateWithoutAgreementsInputObjectSchema } from './PublisherCreateWithoutAgreementsInput.schema';
import { PublisherUncheckedCreateWithoutAgreementsInputObjectSchema as PublisherUncheckedCreateWithoutAgreementsInputObjectSchema } from './PublisherUncheckedCreateWithoutAgreementsInput.schema';
import { PublisherWhereInputObjectSchema as PublisherWhereInputObjectSchema } from './PublisherWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => PublisherUpdateWithoutAgreementsInputObjectSchema), z.lazy(() => PublisherUncheckedUpdateWithoutAgreementsInputObjectSchema)]),
  create: z.union([z.lazy(() => PublisherCreateWithoutAgreementsInputObjectSchema), z.lazy(() => PublisherUncheckedCreateWithoutAgreementsInputObjectSchema)]),
  where: z.lazy(() => PublisherWhereInputObjectSchema).optional()
}).strict();
export const PublisherUpsertWithoutAgreementsInputObjectSchema: z.ZodType<Prisma.PublisherUpsertWithoutAgreementsInput> = makeSchema() as unknown as z.ZodType<Prisma.PublisherUpsertWithoutAgreementsInput>;
export const PublisherUpsertWithoutAgreementsInputObjectZodSchema = makeSchema();
