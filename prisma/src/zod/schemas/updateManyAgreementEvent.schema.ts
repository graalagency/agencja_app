import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { AgreementEventUpdateManyMutationInputObjectSchema as AgreementEventUpdateManyMutationInputObjectSchema } from './objects/AgreementEventUpdateManyMutationInput.schema';
import { AgreementEventWhereInputObjectSchema as AgreementEventWhereInputObjectSchema } from './objects/AgreementEventWhereInput.schema';

export const AgreementEventUpdateManySchema: z.ZodType<Prisma.AgreementEventUpdateManyArgs> = z.object({ data: AgreementEventUpdateManyMutationInputObjectSchema, where: AgreementEventWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.AgreementEventUpdateManyArgs>;

export const AgreementEventUpdateManyZodSchema = z.object({ data: AgreementEventUpdateManyMutationInputObjectSchema, where: AgreementEventWhereInputObjectSchema.optional() }).strict();