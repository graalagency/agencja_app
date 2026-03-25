import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { PublisherArgsObjectSchema as PublisherArgsObjectSchema } from './PublisherArgs.schema';
import { ClientArgsObjectSchema as ClientArgsObjectSchema } from './ClientArgs.schema';
import { TitleArgsObjectSchema as TitleArgsObjectSchema } from './TitleArgs.schema';
import { AgreementRightFindManySchema as AgreementRightFindManySchema } from '../findManyAgreementRight.schema';
import { AgreementEventFindManySchema as AgreementEventFindManySchema } from '../findManyAgreementEvent.schema';
import { AgreementAdvanceFindManySchema as AgreementAdvanceFindManySchema } from '../findManyAgreementAdvance.schema';
import { AgreementRoyRateFindManySchema as AgreementRoyRateFindManySchema } from '../findManyAgreementRoyRate.schema';
import { AgreementCountOutputTypeArgsObjectSchema as AgreementCountOutputTypeArgsObjectSchema } from './AgreementCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  Publisher: z.union([z.boolean(), z.lazy(() => PublisherArgsObjectSchema)]).optional(),
  Client: z.union([z.boolean(), z.lazy(() => ClientArgsObjectSchema)]).optional(),
  Title: z.union([z.boolean(), z.lazy(() => TitleArgsObjectSchema)]).optional(),
  Rights: z.union([z.boolean(), z.lazy(() => AgreementRightFindManySchema)]).optional(),
  Events: z.union([z.boolean(), z.lazy(() => AgreementEventFindManySchema)]).optional(),
  Advances: z.union([z.boolean(), z.lazy(() => AgreementAdvanceFindManySchema)]).optional(),
  RoyRates: z.union([z.boolean(), z.lazy(() => AgreementRoyRateFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => AgreementCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const AgreementIncludeObjectSchema: z.ZodType<Prisma.AgreementInclude> = makeSchema() as unknown as z.ZodType<Prisma.AgreementInclude>;
export const AgreementIncludeObjectZodSchema = makeSchema();
