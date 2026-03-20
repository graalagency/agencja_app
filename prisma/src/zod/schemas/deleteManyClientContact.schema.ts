import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ClientContactWhereInputObjectSchema as ClientContactWhereInputObjectSchema } from './objects/ClientContactWhereInput.schema';

export const ClientContactDeleteManySchema: z.ZodType<Prisma.ClientContactDeleteManyArgs> = z.object({ where: ClientContactWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.ClientContactDeleteManyArgs>;

export const ClientContactDeleteManyZodSchema = z.object({ where: ClientContactWhereInputObjectSchema.optional() }).strict();