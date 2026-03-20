import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { TitleSelectObjectSchema as TitleSelectObjectSchema } from './objects/TitleSelect.schema';
import { TitleIncludeObjectSchema as TitleIncludeObjectSchema } from './objects/TitleInclude.schema';
import { TitleWhereUniqueInputObjectSchema as TitleWhereUniqueInputObjectSchema } from './objects/TitleWhereUniqueInput.schema';

export const TitleFindUniqueOrThrowSchema: z.ZodType<Prisma.TitleFindUniqueOrThrowArgs> = z.object({ select: TitleSelectObjectSchema.optional(), include: TitleIncludeObjectSchema.optional(), where: TitleWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.TitleFindUniqueOrThrowArgs>;

export const TitleFindUniqueOrThrowZodSchema = z.object({ select: TitleSelectObjectSchema.optional(), include: TitleIncludeObjectSchema.optional(), where: TitleWhereUniqueInputObjectSchema }).strict();