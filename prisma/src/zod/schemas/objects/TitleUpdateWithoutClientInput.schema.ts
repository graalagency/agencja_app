import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { NullableIntFieldUpdateOperationsInputObjectSchema as NullableIntFieldUpdateOperationsInputObjectSchema } from './NullableIntFieldUpdateOperationsInput.schema';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { BoolFieldUpdateOperationsInputObjectSchema as BoolFieldUpdateOperationsInputObjectSchema } from './BoolFieldUpdateOperationsInput.schema';
import { NullableDateTimeFieldUpdateOperationsInputObjectSchema as NullableDateTimeFieldUpdateOperationsInputObjectSchema } from './NullableDateTimeFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { PublisherUpdateOneWithoutTitleNestedInputObjectSchema as PublisherUpdateOneWithoutTitleNestedInputObjectSchema } from './PublisherUpdateOneWithoutTitleNestedInput.schema';
import { TitleAuthorUpdateManyWithoutTitleNestedInputObjectSchema as TitleAuthorUpdateManyWithoutTitleNestedInputObjectSchema } from './TitleAuthorUpdateManyWithoutTitleNestedInput.schema';
import { AgreementUpdateManyWithoutTitleNestedInputObjectSchema as AgreementUpdateManyWithoutTitleNestedInputObjectSchema } from './AgreementUpdateManyWithoutTitleNestedInput.schema';
import { SubmissionUpdateManyWithoutTitleNestedInputObjectSchema as SubmissionUpdateManyWithoutTitleNestedInputObjectSchema } from './SubmissionUpdateManyWithoutTitleNestedInput.schema'

const makeSchema = () => z.object({
  sourceId: z.union([z.number().int(), z.lazy(() => NullableIntFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  title: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  isbn: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  languageCode: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  classCode: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  edition: z.union([z.number().int(), z.lazy(() => NullableIntFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  pages: z.union([z.number().int(), z.lazy(() => NullableIntFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  copyrightYear: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  copyrightOwner: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  keywords: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  volume: z.union([z.number().int(), z.lazy(() => NullableIntFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  totalVolumes: z.union([z.number().int(), z.lazy(() => NullableIntFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  isHit: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema)]).optional(),
  isCollection: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema)]).optional(),
  isCD: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema)]).optional(),
  notes: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  dateOfReceipt: z.union([z.coerce.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  Publisher: z.lazy(() => PublisherUpdateOneWithoutTitleNestedInputObjectSchema).optional(),
  TitleAuthors: z.lazy(() => TitleAuthorUpdateManyWithoutTitleNestedInputObjectSchema).optional(),
  Agreements: z.lazy(() => AgreementUpdateManyWithoutTitleNestedInputObjectSchema).optional(),
  Submissions: z.lazy(() => SubmissionUpdateManyWithoutTitleNestedInputObjectSchema).optional()
}).strict();
export const TitleUpdateWithoutClientInputObjectSchema: z.ZodType<Prisma.TitleUpdateWithoutClientInput> = makeSchema() as unknown as z.ZodType<Prisma.TitleUpdateWithoutClientInput>;
export const TitleUpdateWithoutClientInputObjectZodSchema = makeSchema();
