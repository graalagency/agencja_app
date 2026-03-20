import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ClientContactSelectObjectSchema as ClientContactSelectObjectSchema } from './objects/ClientContactSelect.schema';
import { ClientContactIncludeObjectSchema as ClientContactIncludeObjectSchema } from './objects/ClientContactInclude.schema';
import { ClientContactWhereUniqueInputObjectSchema as ClientContactWhereUniqueInputObjectSchema } from './objects/ClientContactWhereUniqueInput.schema';
import { ClientContactCreateInputObjectSchema as ClientContactCreateInputObjectSchema } from './objects/ClientContactCreateInput.schema';
import { ClientContactUncheckedCreateInputObjectSchema as ClientContactUncheckedCreateInputObjectSchema } from './objects/ClientContactUncheckedCreateInput.schema';
import { ClientContactUpdateInputObjectSchema as ClientContactUpdateInputObjectSchema } from './objects/ClientContactUpdateInput.schema';
import { ClientContactUncheckedUpdateInputObjectSchema as ClientContactUncheckedUpdateInputObjectSchema } from './objects/ClientContactUncheckedUpdateInput.schema';

export const ClientContactUpsertOneSchema: z.ZodType<Prisma.ClientContactUpsertArgs> = z.object({ select: ClientContactSelectObjectSchema.optional(), include: ClientContactIncludeObjectSchema.optional(), where: ClientContactWhereUniqueInputObjectSchema, create: z.union([ ClientContactCreateInputObjectSchema, ClientContactUncheckedCreateInputObjectSchema ]), update: z.union([ ClientContactUpdateInputObjectSchema, ClientContactUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.ClientContactUpsertArgs>;

export const ClientContactUpsertOneZodSchema = z.object({ select: ClientContactSelectObjectSchema.optional(), include: ClientContactIncludeObjectSchema.optional(), where: ClientContactWhereUniqueInputObjectSchema, create: z.union([ ClientContactCreateInputObjectSchema, ClientContactUncheckedCreateInputObjectSchema ]), update: z.union([ ClientContactUpdateInputObjectSchema, ClientContactUncheckedUpdateInputObjectSchema ]) }).strict();