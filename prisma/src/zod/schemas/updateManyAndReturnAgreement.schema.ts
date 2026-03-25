import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { AgreementSelectObjectSchema as AgreementSelectObjectSchema } from './objects/AgreementSelect.schema';
import { AgreementUpdateManyMutationInputObjectSchema as AgreementUpdateManyMutationInputObjectSchema } from './objects/AgreementUpdateManyMutationInput.schema';
import { AgreementWhereInputObjectSchema as AgreementWhereInputObjectSchema } from './objects/AgreementWhereInput.schema';

export const AgreementUpdateManyAndReturnSchema: z.ZodType<Prisma.AgreementUpdateManyAndReturnArgs> = z.object({ select: AgreementSelectObjectSchema.optional(), data: AgreementUpdateManyMutationInputObjectSchema, where: AgreementWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.AgreementUpdateManyAndReturnArgs>;

export const AgreementUpdateManyAndReturnZodSchema = z.object({ select: AgreementSelectObjectSchema.optional(), data: AgreementUpdateManyMutationInputObjectSchema, where: AgreementWhereInputObjectSchema.optional() }).strict();