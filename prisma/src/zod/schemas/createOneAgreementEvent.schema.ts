import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { AgreementEventSelectObjectSchema as AgreementEventSelectObjectSchema } from './objects/AgreementEventSelect.schema';
import { AgreementEventIncludeObjectSchema as AgreementEventIncludeObjectSchema } from './objects/AgreementEventInclude.schema';
import { AgreementEventCreateInputObjectSchema as AgreementEventCreateInputObjectSchema } from './objects/AgreementEventCreateInput.schema';
import { AgreementEventUncheckedCreateInputObjectSchema as AgreementEventUncheckedCreateInputObjectSchema } from './objects/AgreementEventUncheckedCreateInput.schema';

export const AgreementEventCreateOneSchema: z.ZodType<Prisma.AgreementEventCreateArgs> = z.object({ select: AgreementEventSelectObjectSchema.optional(), include: AgreementEventIncludeObjectSchema.optional(), data: z.union([AgreementEventCreateInputObjectSchema, AgreementEventUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.AgreementEventCreateArgs>;

export const AgreementEventCreateOneZodSchema = z.object({ select: AgreementEventSelectObjectSchema.optional(), include: AgreementEventIncludeObjectSchema.optional(), data: z.union([AgreementEventCreateInputObjectSchema, AgreementEventUncheckedCreateInputObjectSchema]) }).strict();