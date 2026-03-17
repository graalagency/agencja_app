import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ContactSelectObjectSchema as ContactSelectObjectSchema } from './objects/ContactSelect.schema';
import { ContactUpdateManyMutationInputObjectSchema as ContactUpdateManyMutationInputObjectSchema } from './objects/ContactUpdateManyMutationInput.schema';
import { ContactWhereInputObjectSchema as ContactWhereInputObjectSchema } from './objects/ContactWhereInput.schema';

export const ContactUpdateManyAndReturnSchema: z.ZodType<Prisma.ContactUpdateManyAndReturnArgs> = z.object({ select: ContactSelectObjectSchema.optional(), data: ContactUpdateManyMutationInputObjectSchema, where: ContactWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.ContactUpdateManyAndReturnArgs>;

export const ContactUpdateManyAndReturnZodSchema = z.object({ select: ContactSelectObjectSchema.optional(), data: ContactUpdateManyMutationInputObjectSchema, where: ContactWhereInputObjectSchema.optional() }).strict();