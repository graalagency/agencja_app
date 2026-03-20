import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ClientContactSelectObjectSchema as ClientContactSelectObjectSchema } from './objects/ClientContactSelect.schema';
import { ClientContactIncludeObjectSchema as ClientContactIncludeObjectSchema } from './objects/ClientContactInclude.schema';
import { ClientContactUpdateInputObjectSchema as ClientContactUpdateInputObjectSchema } from './objects/ClientContactUpdateInput.schema';
import { ClientContactUncheckedUpdateInputObjectSchema as ClientContactUncheckedUpdateInputObjectSchema } from './objects/ClientContactUncheckedUpdateInput.schema';
import { ClientContactWhereUniqueInputObjectSchema as ClientContactWhereUniqueInputObjectSchema } from './objects/ClientContactWhereUniqueInput.schema';

export const ClientContactUpdateOneSchema: z.ZodType<Prisma.ClientContactUpdateArgs> = z.object({ select: ClientContactSelectObjectSchema.optional(), include: ClientContactIncludeObjectSchema.optional(), data: z.union([ClientContactUpdateInputObjectSchema, ClientContactUncheckedUpdateInputObjectSchema]), where: ClientContactWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.ClientContactUpdateArgs>;

export const ClientContactUpdateOneZodSchema = z.object({ select: ClientContactSelectObjectSchema.optional(), include: ClientContactIncludeObjectSchema.optional(), data: z.union([ClientContactUpdateInputObjectSchema, ClientContactUncheckedUpdateInputObjectSchema]), where: ClientContactWhereUniqueInputObjectSchema }).strict();