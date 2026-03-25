import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { PublisherWhereUniqueInputObjectSchema as PublisherWhereUniqueInputObjectSchema } from './PublisherWhereUniqueInput.schema';
import { PublisherCreateWithoutAgreementsInputObjectSchema as PublisherCreateWithoutAgreementsInputObjectSchema } from './PublisherCreateWithoutAgreementsInput.schema';
import { PublisherUncheckedCreateWithoutAgreementsInputObjectSchema as PublisherUncheckedCreateWithoutAgreementsInputObjectSchema } from './PublisherUncheckedCreateWithoutAgreementsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => PublisherWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => PublisherCreateWithoutAgreementsInputObjectSchema), z.lazy(() => PublisherUncheckedCreateWithoutAgreementsInputObjectSchema)])
}).strict();
export const PublisherCreateOrConnectWithoutAgreementsInputObjectSchema: z.ZodType<Prisma.PublisherCreateOrConnectWithoutAgreementsInput> = makeSchema() as unknown as z.ZodType<Prisma.PublisherCreateOrConnectWithoutAgreementsInput>;
export const PublisherCreateOrConnectWithoutAgreementsInputObjectZodSchema = makeSchema();
