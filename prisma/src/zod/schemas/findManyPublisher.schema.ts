import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { PublisherOrderByWithRelationInputObjectSchema as PublisherOrderByWithRelationInputObjectSchema } from './objects/PublisherOrderByWithRelationInput.schema';
import { PublisherWhereInputObjectSchema as PublisherWhereInputObjectSchema } from './objects/PublisherWhereInput.schema';
import { PublisherWhereUniqueInputObjectSchema as PublisherWhereUniqueInputObjectSchema } from './objects/PublisherWhereUniqueInput.schema';
import { PublisherScalarFieldEnumSchema } from './enums/PublisherScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const PublisherFindManySelectSchema: z.ZodType<Prisma.PublisherSelect> = z.object({
    id: z.boolean().optional(),
    name: z.boolean().optional(),
    email: z.boolean().optional(),
    phone: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    address: z.boolean().optional(),
    bankAccount: z.boolean().optional(),
    city: z.boolean().optional(),
    country: z.boolean().optional(),
    legalForm: z.boolean().optional(),
    nip: z.boolean().optional(),
    notes: z.boolean().optional(),
    postalCode: z.boolean().optional(),
    regon: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.PublisherSelect>;

export const PublisherFindManySelectZodSchema = z.object({
    id: z.boolean().optional(),
    name: z.boolean().optional(),
    email: z.boolean().optional(),
    phone: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    address: z.boolean().optional(),
    bankAccount: z.boolean().optional(),
    city: z.boolean().optional(),
    country: z.boolean().optional(),
    legalForm: z.boolean().optional(),
    nip: z.boolean().optional(),
    notes: z.boolean().optional(),
    postalCode: z.boolean().optional(),
    regon: z.boolean().optional()
  }).strict();

export const PublisherFindManySchema: z.ZodType<Prisma.PublisherFindManyArgs> = z.object({ select: PublisherFindManySelectSchema.optional(),  orderBy: z.union([PublisherOrderByWithRelationInputObjectSchema, PublisherOrderByWithRelationInputObjectSchema.array()]).optional(), where: PublisherWhereInputObjectSchema.optional(), cursor: PublisherWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([PublisherScalarFieldEnumSchema, PublisherScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.PublisherFindManyArgs>;

export const PublisherFindManyZodSchema = z.object({ select: PublisherFindManySelectSchema.optional(),  orderBy: z.union([PublisherOrderByWithRelationInputObjectSchema, PublisherOrderByWithRelationInputObjectSchema.array()]).optional(), where: PublisherWhereInputObjectSchema.optional(), cursor: PublisherWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([PublisherScalarFieldEnumSchema, PublisherScalarFieldEnumSchema.array()]).optional() }).strict();