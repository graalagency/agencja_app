import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { AgreementUpdateManyMutationInputObjectSchema as AgreementUpdateManyMutationInputObjectSchema } from './objects/AgreementUpdateManyMutationInput.schema';
import { AgreementWhereInputObjectSchema as AgreementWhereInputObjectSchema } from './objects/AgreementWhereInput.schema';

export const AgreementUpdateManySchema: z.ZodType<Prisma.AgreementUpdateManyArgs> = z.object({ data: AgreementUpdateManyMutationInputObjectSchema, where: AgreementWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.AgreementUpdateManyArgs>;

export const AgreementUpdateManyZodSchema = z.object({ data: AgreementUpdateManyMutationInputObjectSchema, where: AgreementWhereInputObjectSchema.optional() }).strict();