import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { AgreementCreateWithoutEventsInputObjectSchema as AgreementCreateWithoutEventsInputObjectSchema } from './AgreementCreateWithoutEventsInput.schema';
import { AgreementUncheckedCreateWithoutEventsInputObjectSchema as AgreementUncheckedCreateWithoutEventsInputObjectSchema } from './AgreementUncheckedCreateWithoutEventsInput.schema';
import { AgreementCreateOrConnectWithoutEventsInputObjectSchema as AgreementCreateOrConnectWithoutEventsInputObjectSchema } from './AgreementCreateOrConnectWithoutEventsInput.schema';
import { AgreementUpsertWithoutEventsInputObjectSchema as AgreementUpsertWithoutEventsInputObjectSchema } from './AgreementUpsertWithoutEventsInput.schema';
import { AgreementWhereUniqueInputObjectSchema as AgreementWhereUniqueInputObjectSchema } from './AgreementWhereUniqueInput.schema';
import { AgreementUpdateToOneWithWhereWithoutEventsInputObjectSchema as AgreementUpdateToOneWithWhereWithoutEventsInputObjectSchema } from './AgreementUpdateToOneWithWhereWithoutEventsInput.schema';
import { AgreementUpdateWithoutEventsInputObjectSchema as AgreementUpdateWithoutEventsInputObjectSchema } from './AgreementUpdateWithoutEventsInput.schema';
import { AgreementUncheckedUpdateWithoutEventsInputObjectSchema as AgreementUncheckedUpdateWithoutEventsInputObjectSchema } from './AgreementUncheckedUpdateWithoutEventsInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => AgreementCreateWithoutEventsInputObjectSchema), z.lazy(() => AgreementUncheckedCreateWithoutEventsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => AgreementCreateOrConnectWithoutEventsInputObjectSchema).optional(),
  upsert: z.lazy(() => AgreementUpsertWithoutEventsInputObjectSchema).optional(),
  connect: z.lazy(() => AgreementWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => AgreementUpdateToOneWithWhereWithoutEventsInputObjectSchema), z.lazy(() => AgreementUpdateWithoutEventsInputObjectSchema), z.lazy(() => AgreementUncheckedUpdateWithoutEventsInputObjectSchema)]).optional()
}).strict();
export const AgreementUpdateOneRequiredWithoutEventsNestedInputObjectSchema: z.ZodType<Prisma.AgreementUpdateOneRequiredWithoutEventsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.AgreementUpdateOneRequiredWithoutEventsNestedInput>;
export const AgreementUpdateOneRequiredWithoutEventsNestedInputObjectZodSchema = makeSchema();
