import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { PublisherContactIncludeObjectSchema as PublisherContactIncludeObjectSchema } from './objects/PublisherContactInclude.schema';
import { PublisherContactOrderByWithRelationInputObjectSchema as PublisherContactOrderByWithRelationInputObjectSchema } from './objects/PublisherContactOrderByWithRelationInput.schema';
import { PublisherContactWhereInputObjectSchema as PublisherContactWhereInputObjectSchema } from './objects/PublisherContactWhereInput.schema';
import { PublisherContactWhereUniqueInputObjectSchema as PublisherContactWhereUniqueInputObjectSchema } from './objects/PublisherContactWhereUniqueInput.schema';
import { PublisherContactScalarFieldEnumSchema } from './enums/PublisherContactScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const PublisherContactFindFirstSelectSchema: z.ZodType<Prisma.PublisherContactSelect> = z.object({
    id: z.boolean().optional(),
    contactId: z.boolean().optional(),
    publisherId: z.boolean().optional(),
    isDefault: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    Contact: z.boolean().optional(),
    Publisher: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.PublisherContactSelect>;

export const PublisherContactFindFirstSelectZodSchema = z.object({
    id: z.boolean().optional(),
    contactId: z.boolean().optional(),
    publisherId: z.boolean().optional(),
    isDefault: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    Contact: z.boolean().optional(),
    Publisher: z.boolean().optional()
  }).strict();

export const PublisherContactFindFirstSchema: z.ZodType<Prisma.PublisherContactFindFirstArgs> = z.object({ select: PublisherContactFindFirstSelectSchema.optional(), include: z.lazy(() => PublisherContactIncludeObjectSchema.optional()), orderBy: z.union([PublisherContactOrderByWithRelationInputObjectSchema, PublisherContactOrderByWithRelationInputObjectSchema.array()]).optional(), where: PublisherContactWhereInputObjectSchema.optional(), cursor: PublisherContactWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([PublisherContactScalarFieldEnumSchema, PublisherContactScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.PublisherContactFindFirstArgs>;

export const PublisherContactFindFirstZodSchema = z.object({ select: PublisherContactFindFirstSelectSchema.optional(), include: z.lazy(() => PublisherContactIncludeObjectSchema.optional()), orderBy: z.union([PublisherContactOrderByWithRelationInputObjectSchema, PublisherContactOrderByWithRelationInputObjectSchema.array()]).optional(), where: PublisherContactWhereInputObjectSchema.optional(), cursor: PublisherContactWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([PublisherContactScalarFieldEnumSchema, PublisherContactScalarFieldEnumSchema.array()]).optional() }).strict();