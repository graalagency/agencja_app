import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ClientContactSelectObjectSchema as ClientContactSelectObjectSchema } from './objects/ClientContactSelect.schema';
import { ClientContactUpdateManyMutationInputObjectSchema as ClientContactUpdateManyMutationInputObjectSchema } from './objects/ClientContactUpdateManyMutationInput.schema';
import { ClientContactWhereInputObjectSchema as ClientContactWhereInputObjectSchema } from './objects/ClientContactWhereInput.schema';

export const ClientContactUpdateManyAndReturnSchema: z.ZodType<Prisma.ClientContactUpdateManyAndReturnArgs> = z.object({ select: ClientContactSelectObjectSchema.optional(), data: ClientContactUpdateManyMutationInputObjectSchema, where: ClientContactWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.ClientContactUpdateManyAndReturnArgs>;

export const ClientContactUpdateManyAndReturnZodSchema = z.object({ select: ClientContactSelectObjectSchema.optional(), data: ClientContactUpdateManyMutationInputObjectSchema, where: ClientContactWhereInputObjectSchema.optional() }).strict();