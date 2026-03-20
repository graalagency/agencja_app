import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ClientContactSelectObjectSchema as ClientContactSelectObjectSchema } from './objects/ClientContactSelect.schema';
import { ClientContactIncludeObjectSchema as ClientContactIncludeObjectSchema } from './objects/ClientContactInclude.schema';
import { ClientContactWhereUniqueInputObjectSchema as ClientContactWhereUniqueInputObjectSchema } from './objects/ClientContactWhereUniqueInput.schema';

export const ClientContactDeleteOneSchema: z.ZodType<Prisma.ClientContactDeleteArgs> = z.object({ select: ClientContactSelectObjectSchema.optional(), include: ClientContactIncludeObjectSchema.optional(), where: ClientContactWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.ClientContactDeleteArgs>;

export const ClientContactDeleteOneZodSchema = z.object({ select: ClientContactSelectObjectSchema.optional(), include: ClientContactIncludeObjectSchema.optional(), where: ClientContactWhereUniqueInputObjectSchema }).strict();