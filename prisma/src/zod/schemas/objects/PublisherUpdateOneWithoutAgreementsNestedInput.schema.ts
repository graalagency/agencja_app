import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { PublisherCreateWithoutAgreementsInputObjectSchema as PublisherCreateWithoutAgreementsInputObjectSchema } from './PublisherCreateWithoutAgreementsInput.schema';
import { PublisherUncheckedCreateWithoutAgreementsInputObjectSchema as PublisherUncheckedCreateWithoutAgreementsInputObjectSchema } from './PublisherUncheckedCreateWithoutAgreementsInput.schema';
import { PublisherCreateOrConnectWithoutAgreementsInputObjectSchema as PublisherCreateOrConnectWithoutAgreementsInputObjectSchema } from './PublisherCreateOrConnectWithoutAgreementsInput.schema';
import { PublisherUpsertWithoutAgreementsInputObjectSchema as PublisherUpsertWithoutAgreementsInputObjectSchema } from './PublisherUpsertWithoutAgreementsInput.schema';
import { PublisherWhereInputObjectSchema as PublisherWhereInputObjectSchema } from './PublisherWhereInput.schema';
import { PublisherWhereUniqueInputObjectSchema as PublisherWhereUniqueInputObjectSchema } from './PublisherWhereUniqueInput.schema';
import { PublisherUpdateToOneWithWhereWithoutAgreementsInputObjectSchema as PublisherUpdateToOneWithWhereWithoutAgreementsInputObjectSchema } from './PublisherUpdateToOneWithWhereWithoutAgreementsInput.schema';
import { PublisherUpdateWithoutAgreementsInputObjectSchema as PublisherUpdateWithoutAgreementsInputObjectSchema } from './PublisherUpdateWithoutAgreementsInput.schema';
import { PublisherUncheckedUpdateWithoutAgreementsInputObjectSchema as PublisherUncheckedUpdateWithoutAgreementsInputObjectSchema } from './PublisherUncheckedUpdateWithoutAgreementsInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => PublisherCreateWithoutAgreementsInputObjectSchema), z.lazy(() => PublisherUncheckedCreateWithoutAgreementsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => PublisherCreateOrConnectWithoutAgreementsInputObjectSchema).optional(),
  upsert: z.lazy(() => PublisherUpsertWithoutAgreementsInputObjectSchema).optional(),
  disconnect: z.union([z.boolean(), z.lazy(() => PublisherWhereInputObjectSchema)]).optional(),
  delete: z.union([z.boolean(), z.lazy(() => PublisherWhereInputObjectSchema)]).optional(),
  connect: z.lazy(() => PublisherWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => PublisherUpdateToOneWithWhereWithoutAgreementsInputObjectSchema), z.lazy(() => PublisherUpdateWithoutAgreementsInputObjectSchema), z.lazy(() => PublisherUncheckedUpdateWithoutAgreementsInputObjectSchema)]).optional()
}).strict();
export const PublisherUpdateOneWithoutAgreementsNestedInputObjectSchema: z.ZodType<Prisma.PublisherUpdateOneWithoutAgreementsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.PublisherUpdateOneWithoutAgreementsNestedInput>;
export const PublisherUpdateOneWithoutAgreementsNestedInputObjectZodSchema = makeSchema();
