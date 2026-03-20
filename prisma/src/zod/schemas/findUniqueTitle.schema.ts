import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { TitleSelectObjectSchema as TitleSelectObjectSchema } from './objects/TitleSelect.schema';
import { TitleIncludeObjectSchema as TitleIncludeObjectSchema } from './objects/TitleInclude.schema';
import { TitleWhereUniqueInputObjectSchema as TitleWhereUniqueInputObjectSchema } from './objects/TitleWhereUniqueInput.schema';

export const TitleFindUniqueSchema: z.ZodType<Prisma.TitleFindUniqueArgs> = z.object({ select: TitleSelectObjectSchema.optional(), include: TitleIncludeObjectSchema.optional(), where: TitleWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.TitleFindUniqueArgs>;

export const TitleFindUniqueZodSchema = z.object({ select: TitleSelectObjectSchema.optional(), include: TitleIncludeObjectSchema.optional(), where: TitleWhereUniqueInputObjectSchema }).strict();