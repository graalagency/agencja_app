import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { AgreementAdvanceSelectObjectSchema as AgreementAdvanceSelectObjectSchema } from './objects/AgreementAdvanceSelect.schema';
import { AgreementAdvanceIncludeObjectSchema as AgreementAdvanceIncludeObjectSchema } from './objects/AgreementAdvanceInclude.schema';
import { AgreementAdvanceWhereUniqueInputObjectSchema as AgreementAdvanceWhereUniqueInputObjectSchema } from './objects/AgreementAdvanceWhereUniqueInput.schema';

export const AgreementAdvanceFindUniqueSchema: z.ZodType<Prisma.AgreementAdvanceFindUniqueArgs> = z.object({ select: AgreementAdvanceSelectObjectSchema.optional(), include: AgreementAdvanceIncludeObjectSchema.optional(), where: AgreementAdvanceWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.AgreementAdvanceFindUniqueArgs>;

export const AgreementAdvanceFindUniqueZodSchema = z.object({ select: AgreementAdvanceSelectObjectSchema.optional(), include: AgreementAdvanceIncludeObjectSchema.optional(), where: AgreementAdvanceWhereUniqueInputObjectSchema }).strict();