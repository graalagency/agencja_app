import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ClientContactSelectObjectSchema as ClientContactSelectObjectSchema } from './objects/ClientContactSelect.schema';
import { ClientContactIncludeObjectSchema as ClientContactIncludeObjectSchema } from './objects/ClientContactInclude.schema';
import { ClientContactCreateInputObjectSchema as ClientContactCreateInputObjectSchema } from './objects/ClientContactCreateInput.schema';
import { ClientContactUncheckedCreateInputObjectSchema as ClientContactUncheckedCreateInputObjectSchema } from './objects/ClientContactUncheckedCreateInput.schema';

export const ClientContactCreateOneSchema: z.ZodType<Prisma.ClientContactCreateArgs> = z.object({ select: ClientContactSelectObjectSchema.optional(), include: ClientContactIncludeObjectSchema.optional(), data: z.union([ClientContactCreateInputObjectSchema, ClientContactUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.ClientContactCreateArgs>;

export const ClientContactCreateOneZodSchema = z.object({ select: ClientContactSelectObjectSchema.optional(), include: ClientContactIncludeObjectSchema.optional(), data: z.union([ClientContactCreateInputObjectSchema, ClientContactUncheckedCreateInputObjectSchema]) }).strict();