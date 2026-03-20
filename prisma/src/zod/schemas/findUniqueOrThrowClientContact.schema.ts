import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ClientContactSelectObjectSchema as ClientContactSelectObjectSchema } from './objects/ClientContactSelect.schema';
import { ClientContactIncludeObjectSchema as ClientContactIncludeObjectSchema } from './objects/ClientContactInclude.schema';
import { ClientContactWhereUniqueInputObjectSchema as ClientContactWhereUniqueInputObjectSchema } from './objects/ClientContactWhereUniqueInput.schema';

export const ClientContactFindUniqueOrThrowSchema: z.ZodType<Prisma.ClientContactFindUniqueOrThrowArgs> = z.object({ select: ClientContactSelectObjectSchema.optional(), include: ClientContactIncludeObjectSchema.optional(), where: ClientContactWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.ClientContactFindUniqueOrThrowArgs>;

export const ClientContactFindUniqueOrThrowZodSchema = z.object({ select: ClientContactSelectObjectSchema.optional(), include: ClientContactIncludeObjectSchema.optional(), where: ClientContactWhereUniqueInputObjectSchema }).strict();