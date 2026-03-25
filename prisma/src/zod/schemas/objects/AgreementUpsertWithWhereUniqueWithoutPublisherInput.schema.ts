import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { AgreementWhereUniqueInputObjectSchema as AgreementWhereUniqueInputObjectSchema } from './AgreementWhereUniqueInput.schema';
import { AgreementUpdateWithoutPublisherInputObjectSchema as AgreementUpdateWithoutPublisherInputObjectSchema } from './AgreementUpdateWithoutPublisherInput.schema';
import { AgreementUncheckedUpdateWithoutPublisherInputObjectSchema as AgreementUncheckedUpdateWithoutPublisherInputObjectSchema } from './AgreementUncheckedUpdateWithoutPublisherInput.schema';
import { AgreementCreateWithoutPublisherInputObjectSchema as AgreementCreateWithoutPublisherInputObjectSchema } from './AgreementCreateWithoutPublisherInput.schema';
import { AgreementUncheckedCreateWithoutPublisherInputObjectSchema as AgreementUncheckedCreateWithoutPublisherInputObjectSchema } from './AgreementUncheckedCreateWithoutPublisherInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => AgreementWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => AgreementUpdateWithoutPublisherInputObjectSchema), z.lazy(() => AgreementUncheckedUpdateWithoutPublisherInputObjectSchema)]),
  create: z.union([z.lazy(() => AgreementCreateWithoutPublisherInputObjectSchema), z.lazy(() => AgreementUncheckedCreateWithoutPublisherInputObjectSchema)])
}).strict();
export const AgreementUpsertWithWhereUniqueWithoutPublisherInputObjectSchema: z.ZodType<Prisma.AgreementUpsertWithWhereUniqueWithoutPublisherInput> = makeSchema() as unknown as z.ZodType<Prisma.AgreementUpsertWithWhereUniqueWithoutPublisherInput>;
export const AgreementUpsertWithWhereUniqueWithoutPublisherInputObjectZodSchema = makeSchema();
