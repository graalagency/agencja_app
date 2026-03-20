import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ClientContactUpdateManyMutationInputObjectSchema as ClientContactUpdateManyMutationInputObjectSchema } from './objects/ClientContactUpdateManyMutationInput.schema';
import { ClientContactWhereInputObjectSchema as ClientContactWhereInputObjectSchema } from './objects/ClientContactWhereInput.schema';

export const ClientContactUpdateManySchema: z.ZodType<Prisma.ClientContactUpdateManyArgs> = z.object({ data: ClientContactUpdateManyMutationInputObjectSchema, where: ClientContactWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.ClientContactUpdateManyArgs>;

export const ClientContactUpdateManyZodSchema = z.object({ data: ClientContactUpdateManyMutationInputObjectSchema, where: ClientContactWhereInputObjectSchema.optional() }).strict();