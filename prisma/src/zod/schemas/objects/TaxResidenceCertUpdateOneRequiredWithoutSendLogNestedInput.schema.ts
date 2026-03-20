import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TaxResidenceCertCreateWithoutSendLogInputObjectSchema as TaxResidenceCertCreateWithoutSendLogInputObjectSchema } from './TaxResidenceCertCreateWithoutSendLogInput.schema';
import { TaxResidenceCertUncheckedCreateWithoutSendLogInputObjectSchema as TaxResidenceCertUncheckedCreateWithoutSendLogInputObjectSchema } from './TaxResidenceCertUncheckedCreateWithoutSendLogInput.schema';
import { TaxResidenceCertCreateOrConnectWithoutSendLogInputObjectSchema as TaxResidenceCertCreateOrConnectWithoutSendLogInputObjectSchema } from './TaxResidenceCertCreateOrConnectWithoutSendLogInput.schema';
import { TaxResidenceCertUpsertWithoutSendLogInputObjectSchema as TaxResidenceCertUpsertWithoutSendLogInputObjectSchema } from './TaxResidenceCertUpsertWithoutSendLogInput.schema';
import { TaxResidenceCertWhereUniqueInputObjectSchema as TaxResidenceCertWhereUniqueInputObjectSchema } from './TaxResidenceCertWhereUniqueInput.schema';
import { TaxResidenceCertUpdateToOneWithWhereWithoutSendLogInputObjectSchema as TaxResidenceCertUpdateToOneWithWhereWithoutSendLogInputObjectSchema } from './TaxResidenceCertUpdateToOneWithWhereWithoutSendLogInput.schema';
import { TaxResidenceCertUpdateWithoutSendLogInputObjectSchema as TaxResidenceCertUpdateWithoutSendLogInputObjectSchema } from './TaxResidenceCertUpdateWithoutSendLogInput.schema';
import { TaxResidenceCertUncheckedUpdateWithoutSendLogInputObjectSchema as TaxResidenceCertUncheckedUpdateWithoutSendLogInputObjectSchema } from './TaxResidenceCertUncheckedUpdateWithoutSendLogInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => TaxResidenceCertCreateWithoutSendLogInputObjectSchema), z.lazy(() => TaxResidenceCertUncheckedCreateWithoutSendLogInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => TaxResidenceCertCreateOrConnectWithoutSendLogInputObjectSchema).optional(),
  upsert: z.lazy(() => TaxResidenceCertUpsertWithoutSendLogInputObjectSchema).optional(),
  connect: z.lazy(() => TaxResidenceCertWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => TaxResidenceCertUpdateToOneWithWhereWithoutSendLogInputObjectSchema), z.lazy(() => TaxResidenceCertUpdateWithoutSendLogInputObjectSchema), z.lazy(() => TaxResidenceCertUncheckedUpdateWithoutSendLogInputObjectSchema)]).optional()
}).strict();
export const TaxResidenceCertUpdateOneRequiredWithoutSendLogNestedInputObjectSchema: z.ZodType<Prisma.TaxResidenceCertUpdateOneRequiredWithoutSendLogNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.TaxResidenceCertUpdateOneRequiredWithoutSendLogNestedInput>;
export const TaxResidenceCertUpdateOneRequiredWithoutSendLogNestedInputObjectZodSchema = makeSchema();
