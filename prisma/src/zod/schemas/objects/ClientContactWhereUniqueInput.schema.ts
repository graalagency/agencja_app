import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ClientContactContactIdClientIdCompoundUniqueInputObjectSchema as ClientContactContactIdClientIdCompoundUniqueInputObjectSchema } from './ClientContactContactIdClientIdCompoundUniqueInput.schema'

const makeSchema = () => z.object({
  id: z.number().int().optional(),
  contactId_clientId: z.lazy(() => ClientContactContactIdClientIdCompoundUniqueInputObjectSchema).optional()
}).strict();
export const ClientContactWhereUniqueInputObjectSchema: z.ZodType<Prisma.ClientContactWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.ClientContactWhereUniqueInput>;
export const ClientContactWhereUniqueInputObjectZodSchema = makeSchema();
