import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { AgreementRightSelectObjectSchema as AgreementRightSelectObjectSchema } from './objects/AgreementRightSelect.schema';
import { AgreementRightIncludeObjectSchema as AgreementRightIncludeObjectSchema } from './objects/AgreementRightInclude.schema';
import { AgreementRightWhereUniqueInputObjectSchema as AgreementRightWhereUniqueInputObjectSchema } from './objects/AgreementRightWhereUniqueInput.schema';

export const AgreementRightFindUniqueOrThrowSchema: z.ZodType<Prisma.AgreementRightFindUniqueOrThrowArgs> = z.object({ select: AgreementRightSelectObjectSchema.optional(), include: AgreementRightIncludeObjectSchema.optional(), where: AgreementRightWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.AgreementRightFindUniqueOrThrowArgs>;

export const AgreementRightFindUniqueOrThrowZodSchema = z.object({ select: AgreementRightSelectObjectSchema.optional(), include: AgreementRightIncludeObjectSchema.optional(), where: AgreementRightWhereUniqueInputObjectSchema }).strict();