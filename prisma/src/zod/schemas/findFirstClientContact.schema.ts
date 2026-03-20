import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ClientContactIncludeObjectSchema as ClientContactIncludeObjectSchema } from './objects/ClientContactInclude.schema';
import { ClientContactOrderByWithRelationInputObjectSchema as ClientContactOrderByWithRelationInputObjectSchema } from './objects/ClientContactOrderByWithRelationInput.schema';
import { ClientContactWhereInputObjectSchema as ClientContactWhereInputObjectSchema } from './objects/ClientContactWhereInput.schema';
import { ClientContactWhereUniqueInputObjectSchema as ClientContactWhereUniqueInputObjectSchema } from './objects/ClientContactWhereUniqueInput.schema';
import { ClientContactScalarFieldEnumSchema } from './enums/ClientContactScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const ClientContactFindFirstSelectSchema: z.ZodType<Prisma.ClientContactSelect> = z.object({
    id: z.boolean().optional(),
    contactId: z.boolean().optional(),
    clientId: z.boolean().optional(),
    isDefault: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    Contact: z.boolean().optional(),
    Client: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.ClientContactSelect>;

export const ClientContactFindFirstSelectZodSchema = z.object({
    id: z.boolean().optional(),
    contactId: z.boolean().optional(),
    clientId: z.boolean().optional(),
    isDefault: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    Contact: z.boolean().optional(),
    Client: z.boolean().optional()
  }).strict();

export const ClientContactFindFirstSchema: z.ZodType<Prisma.ClientContactFindFirstArgs> = z.object({ select: ClientContactFindFirstSelectSchema.optional(), include: z.lazy(() => ClientContactIncludeObjectSchema.optional()), orderBy: z.union([ClientContactOrderByWithRelationInputObjectSchema, ClientContactOrderByWithRelationInputObjectSchema.array()]).optional(), where: ClientContactWhereInputObjectSchema.optional(), cursor: ClientContactWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([ClientContactScalarFieldEnumSchema, ClientContactScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.ClientContactFindFirstArgs>;

export const ClientContactFindFirstZodSchema = z.object({ select: ClientContactFindFirstSelectSchema.optional(), include: z.lazy(() => ClientContactIncludeObjectSchema.optional()), orderBy: z.union([ClientContactOrderByWithRelationInputObjectSchema, ClientContactOrderByWithRelationInputObjectSchema.array()]).optional(), where: ClientContactWhereInputObjectSchema.optional(), cursor: ClientContactWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([ClientContactScalarFieldEnumSchema, ClientContactScalarFieldEnumSchema.array()]).optional() }).strict();