import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { PublisherCreateWithoutAgreementsInputObjectSchema as PublisherCreateWithoutAgreementsInputObjectSchema } from './PublisherCreateWithoutAgreementsInput.schema';
import { PublisherUncheckedCreateWithoutAgreementsInputObjectSchema as PublisherUncheckedCreateWithoutAgreementsInputObjectSchema } from './PublisherUncheckedCreateWithoutAgreementsInput.schema';
import { PublisherCreateOrConnectWithoutAgreementsInputObjectSchema as PublisherCreateOrConnectWithoutAgreementsInputObjectSchema } from './PublisherCreateOrConnectWithoutAgreementsInput.schema';
import { PublisherWhereUniqueInputObjectSchema as PublisherWhereUniqueInputObjectSchema } from './PublisherWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => PublisherCreateWithoutAgreementsInputObjectSchema), z.lazy(() => PublisherUncheckedCreateWithoutAgreementsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => PublisherCreateOrConnectWithoutAgreementsInputObjectSchema).optional(),
  connect: z.lazy(() => PublisherWhereUniqueInputObjectSchema).optional()
}).strict();
export const PublisherCreateNestedOneWithoutAgreementsInputObjectSchema: z.ZodType<Prisma.PublisherCreateNestedOneWithoutAgreementsInput> = makeSchema() as unknown as z.ZodType<Prisma.PublisherCreateNestedOneWithoutAgreementsInput>;
export const PublisherCreateNestedOneWithoutAgreementsInputObjectZodSchema = makeSchema();
