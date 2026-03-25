import * as z from 'zod';
import { Prisma } from '@prisma/client';
import Decimal from 'decimal.js';
import { AgreementRightUncheckedCreateNestedManyWithoutAgreementInputObjectSchema as AgreementRightUncheckedCreateNestedManyWithoutAgreementInputObjectSchema } from './AgreementRightUncheckedCreateNestedManyWithoutAgreementInput.schema';
import { AgreementEventUncheckedCreateNestedManyWithoutAgreementInputObjectSchema as AgreementEventUncheckedCreateNestedManyWithoutAgreementInputObjectSchema } from './AgreementEventUncheckedCreateNestedManyWithoutAgreementInput.schema';
import { AgreementAdvanceUncheckedCreateNestedManyWithoutAgreementInputObjectSchema as AgreementAdvanceUncheckedCreateNestedManyWithoutAgreementInputObjectSchema } from './AgreementAdvanceUncheckedCreateNestedManyWithoutAgreementInput.schema';
import { AgreementRoyRateUncheckedCreateNestedManyWithoutAgreementInputObjectSchema as AgreementRoyRateUncheckedCreateNestedManyWithoutAgreementInputObjectSchema } from './AgreementRoyRateUncheckedCreateNestedManyWithoutAgreementInput.schema'

import { DecimalJSLikeSchema, isValidDecimalInput } from '../../helpers/decimal-helpers';
const makeSchema = () => z.object({
  id: z.number().int().optional(),
  sourceId: z.number().int().optional().nullable(),
  publisherId: z.number().int().optional().nullable(),
  clientId: z.number().int().optional().nullable(),
  titleId: z.number().int().optional().nullable(),
  agrDate: z.coerce.date(),
  validYY: z.number().int().optional().nullable(),
  pubTermMM: z.number().int().optional().nullable(),
  maxCopies: z.number().int().optional().nullable(),
  minCopies: z.number().int().optional().nullable(),
  copiesToOwner: z.number().int().optional().nullable(),
  copiesToGraal: z.number().int().optional().nullable(),
  currencyCode: z.string().max(3).optional().nullable(),
  commission: z.union([
  z.number(),
  z.string(),
  z.instanceof(Decimal),
  z.instanceof(Prisma.Decimal),
  DecimalJSLikeSchema,
]).refine((v) => isValidDecimalInput(v), {
  message: "Field 'commission' must be a Decimal",
}).optional().nullable(),
  commissionMaterials: z.union([
  z.number(),
  z.string(),
  z.instanceof(Decimal),
  z.instanceof(Prisma.Decimal),
  DecimalJSLikeSchema,
]).refine((v) => isValidDecimalInput(v), {
  message: "Field 'commissionMaterials' must be a Decimal",
}).optional().nullable(),
  estimatedCopyPrice: z.union([
  z.number(),
  z.string(),
  z.instanceof(Decimal),
  z.instanceof(Prisma.Decimal),
  DecimalJSLikeSchema,
]).refine((v) => isValidDecimalInput(v), {
  message: "Field 'estimatedCopyPrice' must be a Decimal",
}).optional().nullable(),
  graalShare: z.union([
  z.number(),
  z.string(),
  z.instanceof(Decimal),
  z.instanceof(Prisma.Decimal),
  DecimalJSLikeSchema,
]).refine((v) => isValidDecimalInput(v), {
  message: "Field 'graalShare' must be a Decimal",
}).optional().nullable(),
  graalRepresent: z.boolean().optional(),
  languageCode: z.string().max(3).optional().nullable(),
  countryId: z.number().int().optional().nullable(),
  localTitle: z.string().max(150).optional().nullable(),
  localIsbn: z.string().max(16).optional().nullable(),
  localPubDate: z.coerce.date().optional().nullable(),
  clientReference: z.string().max(50).optional().nullable(),
  agrDoc: z.string().max(250).optional().nullable(),
  status: z.string().max(1).optional().nullable(),
  remarks: z.string().max(1000).optional().nullable(),
  agentId: z.number().int().optional().nullable(),
  dateMod: z.coerce.date().optional().nullable(),
  userMod: z.string().max(30).optional().nullable(),
  createdAt: z.coerce.date().optional(),
  Rights: z.lazy(() => AgreementRightUncheckedCreateNestedManyWithoutAgreementInputObjectSchema).optional(),
  Events: z.lazy(() => AgreementEventUncheckedCreateNestedManyWithoutAgreementInputObjectSchema).optional(),
  Advances: z.lazy(() => AgreementAdvanceUncheckedCreateNestedManyWithoutAgreementInputObjectSchema).optional(),
  RoyRates: z.lazy(() => AgreementRoyRateUncheckedCreateNestedManyWithoutAgreementInputObjectSchema).optional()
}).strict();
export const AgreementUncheckedCreateInputObjectSchema: z.ZodType<Prisma.AgreementUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.AgreementUncheckedCreateInput>;
export const AgreementUncheckedCreateInputObjectZodSchema = makeSchema();
