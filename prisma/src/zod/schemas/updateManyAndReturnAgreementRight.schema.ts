import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { AgreementRightSelectObjectSchema as AgreementRightSelectObjectSchema } from './objects/AgreementRightSelect.schema';
import { AgreementRightUpdateManyMutationInputObjectSchema as AgreementRightUpdateManyMutationInputObjectSchema } from './objects/AgreementRightUpdateManyMutationInput.schema';
import { AgreementRightWhereInputObjectSchema as AgreementRightWhereInputObjectSchema } from './objects/AgreementRightWhereInput.schema';

export const AgreementRightUpdateManyAndReturnSchema: z.ZodType<Prisma.AgreementRightUpdateManyAndReturnArgs> = z.object({ select: AgreementRightSelectObjectSchema.optional(), data: AgreementRightUpdateManyMutationInputObjectSchema, where: AgreementRightWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.AgreementRightUpdateManyAndReturnArgs>;

export const AgreementRightUpdateManyAndReturnZodSchema = z.object({ select: AgreementRightSelectObjectSchema.optional(), data: AgreementRightUpdateManyMutationInputObjectSchema, where: AgreementRightWhereInputObjectSchema.optional() }).strict();