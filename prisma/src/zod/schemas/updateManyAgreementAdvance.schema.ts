import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { AgreementAdvanceUpdateManyMutationInputObjectSchema as AgreementAdvanceUpdateManyMutationInputObjectSchema } from './objects/AgreementAdvanceUpdateManyMutationInput.schema';
import { AgreementAdvanceWhereInputObjectSchema as AgreementAdvanceWhereInputObjectSchema } from './objects/AgreementAdvanceWhereInput.schema';

export const AgreementAdvanceUpdateManySchema: z.ZodType<Prisma.AgreementAdvanceUpdateManyArgs> = z.object({ data: AgreementAdvanceUpdateManyMutationInputObjectSchema, where: AgreementAdvanceWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.AgreementAdvanceUpdateManyArgs>;

export const AgreementAdvanceUpdateManyZodSchema = z.object({ data: AgreementAdvanceUpdateManyMutationInputObjectSchema, where: AgreementAdvanceWhereInputObjectSchema.optional() }).strict();