import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { AgreementEventSelectObjectSchema as AgreementEventSelectObjectSchema } from './objects/AgreementEventSelect.schema';
import { AgreementEventUpdateManyMutationInputObjectSchema as AgreementEventUpdateManyMutationInputObjectSchema } from './objects/AgreementEventUpdateManyMutationInput.schema';
import { AgreementEventWhereInputObjectSchema as AgreementEventWhereInputObjectSchema } from './objects/AgreementEventWhereInput.schema';

export const AgreementEventUpdateManyAndReturnSchema: z.ZodType<Prisma.AgreementEventUpdateManyAndReturnArgs> = z.object({ select: AgreementEventSelectObjectSchema.optional(), data: AgreementEventUpdateManyMutationInputObjectSchema, where: AgreementEventWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.AgreementEventUpdateManyAndReturnArgs>;

export const AgreementEventUpdateManyAndReturnZodSchema = z.object({ select: AgreementEventSelectObjectSchema.optional(), data: AgreementEventUpdateManyMutationInputObjectSchema, where: AgreementEventWhereInputObjectSchema.optional() }).strict();