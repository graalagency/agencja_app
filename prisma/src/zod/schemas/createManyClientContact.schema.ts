import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ClientContactCreateManyInputObjectSchema as ClientContactCreateManyInputObjectSchema } from './objects/ClientContactCreateManyInput.schema';

export const ClientContactCreateManySchema: z.ZodType<Prisma.ClientContactCreateManyArgs> = z.object({ data: z.union([ ClientContactCreateManyInputObjectSchema, z.array(ClientContactCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.ClientContactCreateManyArgs>;

export const ClientContactCreateManyZodSchema = z.object({ data: z.union([ ClientContactCreateManyInputObjectSchema, z.array(ClientContactCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();