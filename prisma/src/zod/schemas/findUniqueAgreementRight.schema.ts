import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { AgreementRightSelectObjectSchema as AgreementRightSelectObjectSchema } from './objects/AgreementRightSelect.schema';
import { AgreementRightIncludeObjectSchema as AgreementRightIncludeObjectSchema } from './objects/AgreementRightInclude.schema';
import { AgreementRightWhereUniqueInputObjectSchema as AgreementRightWhereUniqueInputObjectSchema } from './objects/AgreementRightWhereUniqueInput.schema';

export const AgreementRightFindUniqueSchema: z.ZodType<Prisma.AgreementRightFindUniqueArgs> = z.object({ select: AgreementRightSelectObjectSchema.optional(), include: AgreementRightIncludeObjectSchema.optional(), where: AgreementRightWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.AgreementRightFindUniqueArgs>;

export const AgreementRightFindUniqueZodSchema = z.object({ select: AgreementRightSelectObjectSchema.optional(), include: AgreementRightIncludeObjectSchema.optional(), where: AgreementRightWhereUniqueInputObjectSchema }).strict();