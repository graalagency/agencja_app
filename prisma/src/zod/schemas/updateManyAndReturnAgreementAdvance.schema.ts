import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { AgreementAdvanceSelectObjectSchema as AgreementAdvanceSelectObjectSchema } from './objects/AgreementAdvanceSelect.schema';
import { AgreementAdvanceUpdateManyMutationInputObjectSchema as AgreementAdvanceUpdateManyMutationInputObjectSchema } from './objects/AgreementAdvanceUpdateManyMutationInput.schema';
import { AgreementAdvanceWhereInputObjectSchema as AgreementAdvanceWhereInputObjectSchema } from './objects/AgreementAdvanceWhereInput.schema';

export const AgreementAdvanceUpdateManyAndReturnSchema: z.ZodType<Prisma.AgreementAdvanceUpdateManyAndReturnArgs> = z.object({ select: AgreementAdvanceSelectObjectSchema.optional(), data: AgreementAdvanceUpdateManyMutationInputObjectSchema, where: AgreementAdvanceWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.AgreementAdvanceUpdateManyAndReturnArgs>;

export const AgreementAdvanceUpdateManyAndReturnZodSchema = z.object({ select: AgreementAdvanceSelectObjectSchema.optional(), data: AgreementAdvanceUpdateManyMutationInputObjectSchema, where: AgreementAdvanceWhereInputObjectSchema.optional() }).strict();