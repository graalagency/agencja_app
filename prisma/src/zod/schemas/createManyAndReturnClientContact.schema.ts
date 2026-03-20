import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ClientContactSelectObjectSchema as ClientContactSelectObjectSchema } from './objects/ClientContactSelect.schema';
import { ClientContactCreateManyInputObjectSchema as ClientContactCreateManyInputObjectSchema } from './objects/ClientContactCreateManyInput.schema';

export const ClientContactCreateManyAndReturnSchema: z.ZodType<Prisma.ClientContactCreateManyAndReturnArgs> = z.object({ select: ClientContactSelectObjectSchema.optional(), data: z.union([ ClientContactCreateManyInputObjectSchema, z.array(ClientContactCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.ClientContactCreateManyAndReturnArgs>;

export const ClientContactCreateManyAndReturnZodSchema = z.object({ select: ClientContactSelectObjectSchema.optional(), data: z.union([ ClientContactCreateManyInputObjectSchema, z.array(ClientContactCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();