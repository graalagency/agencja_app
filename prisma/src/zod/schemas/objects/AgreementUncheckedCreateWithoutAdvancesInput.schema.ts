import * as z from 'zod';
import { Prisma } from '@prisma/client';
import Decimal from 'decimal.js';
import { AgreementRightUncheckedCreateNestedManyWithoutAgreementInputObjectSchema as AgreementRightUncheckedCreateNestedManyWithoutAgreementInputObjectSchema } from './AgreementRightUncheckedCreateNestedManyWithoutAgreementInput.schema';
import { AgreementEventUncheckedCreateNestedManyWithoutAgreementInputObjectSchema as AgreementEventUncheckedCreateNestedManyWithoutAgreementInputObjectSchema } from './AgreementEventUncheckedCreateNestedManyWithoutAgreementInput.schema';
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
  currencyCode: z.string().optional().nullable(),
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
  languageCode: z.string().optional().nullable(),
  countryId: z.number().int().optional().nullable(),
  localTitle: z.string().optional().nullable(),
  localIsbn: z.string().optional().nullable(),
  localPubDate: z.coerce.date().optional().nullable(),
  clientReference: z.string().optional().nullable(),
  agrDoc: z.string().optional().nullable(),
  status: z.string().optional().nullable(),
  remarks: z.string().optional().nullable(),
  agentId: z.number().int().optional().nullable(),
  dateMod: z.coerce.date().optional().nullable(),
  userMod: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  Rights: z.lazy(() => AgreementRightUncheckedCreateNestedManyWithoutAgreementInputObjectSchema).optional(),
  Events: z.lazy(() => AgreementEventUncheckedCreateNestedManyWithoutAgreementInputObjectSchema).optional(),
  RoyRates: z.lazy(() => AgreementRoyRateUncheckedCreateNestedManyWithoutAgreementInputObjectSchema).optional()
}).strict();
export const AgreementUncheckedCreateWithoutAdvancesInputObjectSchema: z.ZodType<Prisma.AgreementUncheckedCreateWithoutAdvancesInput> = makeSchema() as unknown as z.ZodType<Prisma.AgreementUncheckedCreateWithoutAdvancesInput>;
export const AgreementUncheckedCreateWithoutAdvancesInputObjectZodSchema = makeSchema();
