import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { TitleAuthorIncludeObjectSchema as TitleAuthorIncludeObjectSchema } from './objects/TitleAuthorInclude.schema';
import { TitleAuthorOrderByWithRelationInputObjectSchema as TitleAuthorOrderByWithRelationInputObjectSchema } from './objects/TitleAuthorOrderByWithRelationInput.schema';
import { TitleAuthorWhereInputObjectSchema as TitleAuthorWhereInputObjectSchema } from './objects/TitleAuthorWhereInput.schema';
import { TitleAuthorWhereUniqueInputObjectSchema as TitleAuthorWhereUniqueInputObjectSchema } from './objects/TitleAuthorWhereUniqueInput.schema';
import { TitleAuthorScalarFieldEnumSchema } from './enums/TitleAuthorScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const TitleAuthorFindFirstOrThrowSelectSchema: z.ZodType<Prisma.TitleAuthorSelect> = z.object({
    titleId: z.boolean().optional(),
    authorId: z.boolean().optional(),
    isMain: z.boolean().optional(),
    order: z.boolean().optional(),
    Title: z.boolean().optional(),
    Author: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.TitleAuthorSelect>;

export const TitleAuthorFindFirstOrThrowSelectZodSchema = z.object({
    titleId: z.boolean().optional(),
    authorId: z.boolean().optional(),
    isMain: z.boolean().optional(),
    order: z.boolean().optional(),
    Title: z.boolean().optional(),
    Author: z.boolean().optional()
  }).strict();

export const TitleAuthorFindFirstOrThrowSchema: z.ZodType<Prisma.TitleAuthorFindFirstOrThrowArgs> = z.object({ select: TitleAuthorFindFirstOrThrowSelectSchema.optional(), include: z.lazy(() => TitleAuthorIncludeObjectSchema.optional()), orderBy: z.union([TitleAuthorOrderByWithRelationInputObjectSchema, TitleAuthorOrderByWithRelationInputObjectSchema.array()]).optional(), where: TitleAuthorWhereInputObjectSchema.optional(), cursor: TitleAuthorWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([TitleAuthorScalarFieldEnumSchema, TitleAuthorScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.TitleAuthorFindFirstOrThrowArgs>;

export const TitleAuthorFindFirstOrThrowZodSchema = z.object({ select: TitleAuthorFindFirstOrThrowSelectSchema.optional(), include: z.lazy(() => TitleAuthorIncludeObjectSchema.optional()), orderBy: z.union([TitleAuthorOrderByWithRelationInputObjectSchema, TitleAuthorOrderByWithRelationInputObjectSchema.array()]).optional(), where: TitleAuthorWhereInputObjectSchema.optional(), cursor: TitleAuthorWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([TitleAuthorScalarFieldEnumSchema, TitleAuthorScalarFieldEnumSchema.array()]).optional() }).strict();