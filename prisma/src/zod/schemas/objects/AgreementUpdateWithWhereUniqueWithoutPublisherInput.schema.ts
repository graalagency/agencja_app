import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { AgreementWhereUniqueInputObjectSchema as AgreementWhereUniqueInputObjectSchema } from './AgreementWhereUniqueInput.schema';
import { AgreementUpdateWithoutPublisherInputObjectSchema as AgreementUpdateWithoutPublisherInputObjectSchema } from './AgreementUpdateWithoutPublisherInput.schema';
import { AgreementUncheckedUpdateWithoutPublisherInputObjectSchema as AgreementUncheckedUpdateWithoutPublisherInputObjectSchema } from './AgreementUncheckedUpdateWithoutPublisherInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => AgreementWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => AgreementUpdateWithoutPublisherInputObjectSchema), z.lazy(() => AgreementUncheckedUpdateWithoutPublisherInputObjectSchema)])
}).strict();
export const AgreementUpdateWithWhereUniqueWithoutPublisherInputObjectSchema: z.ZodType<Prisma.AgreementUpdateWithWhereUniqueWithoutPublisherInput> = makeSchema() as unknown as z.ZodType<Prisma.AgreementUpdateWithWhereUniqueWithoutPublisherInput>;
export const AgreementUpdateWithWhereUniqueWithoutPublisherInputObjectZodSchema = makeSchema();
