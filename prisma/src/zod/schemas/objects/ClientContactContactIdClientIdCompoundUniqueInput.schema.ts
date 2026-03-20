import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  contactId: z.number().int(),
  clientId: z.number().int()
}).strict();
export const ClientContactContactIdClientIdCompoundUniqueInputObjectSchema: z.ZodType<Prisma.ClientContactContactIdClientIdCompoundUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.ClientContactContactIdClientIdCompoundUniqueInput>;
export const ClientContactContactIdClientIdCompoundUniqueInputObjectZodSchema = makeSchema();
