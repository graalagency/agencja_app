import * as z from 'zod';
export const SubmissionEventAggregateResultSchema = z.object({  _count: z.object({
    id: z.number(),
    sourceId: z.number(),
    submissionId: z.number(),
    eventCode: z.number(),
    eventDate: z.number(),
    noOfCopies: z.number(),
    endDate: z.number(),
    createdAt: z.number(),
    Submission: z.number()
  }).optional(),
  _sum: z.object({
    id: z.number().nullable(),
    sourceId: z.number().nullable(),
    submissionId: z.number().nullable(),
    eventCode: z.number().nullable(),
    noOfCopies: z.number().nullable()
  }).nullable().optional(),
  _avg: z.object({
    id: z.number().nullable(),
    sourceId: z.number().nullable(),
    submissionId: z.number().nullable(),
    eventCode: z.number().nullable(),
    noOfCopies: z.number().nullable()
  }).nullable().optional(),
  _min: z.object({
    id: z.number().int().nullable(),
    sourceId: z.number().int().nullable(),
    submissionId: z.number().int().nullable(),
    eventCode: z.number().int().nullable(),
    eventDate: z.date().nullable(),
    noOfCopies: z.number().int().nullable(),
    endDate: z.date().nullable(),
    createdAt: z.date().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.number().int().nullable(),
    sourceId: z.number().int().nullable(),
    submissionId: z.number().int().nullable(),
    eventCode: z.number().int().nullable(),
    eventDate: z.date().nullable(),
    noOfCopies: z.number().int().nullable(),
    endDate: z.date().nullable(),
    createdAt: z.date().nullable()
  }).nullable().optional()});