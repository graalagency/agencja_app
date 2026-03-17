import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ContactSelectObjectSchema as ContactSelectObjectSchema } from './objects/ContactSelect.schema';
import { ContactCreateManyInputObjectSchema as ContactCreateManyInputObjectSchema } from './objects/ContactCreateManyInput.schema';

export const ContactCreateManyAndReturnSchema: z.ZodType<Prisma.ContactCreateManyAndReturnArgs> = z.object({ select: ContactSelectObjectSchema.optional(), data: z.union([ ContactCreateManyInputObjectSchema, z.array(ContactCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.ContactCreateManyAndReturnArgs>;

export const ContactCreateManyAndReturnZodSchema = z.object({ select: ContactSelectObjectSchema.optional(), data: z.union([ ContactCreateManyInputObjectSchema, z.array(ContactCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();